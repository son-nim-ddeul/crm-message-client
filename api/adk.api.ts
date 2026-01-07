interface SSEMessage {
  event_status?: string;
  user_id?: string;
  session_id?: string;
  branch?: string | null;
  author?: string | null;
  timestamp?: number;
  is_final_response?: boolean;
  ui_status?: unknown;
  content?: {
    role?: string;
    parts?: Array<{
      text?: string;
      [key: string]: unknown;
    }>;
  };
  error?: unknown;
}

const API_URL = "http://ddeul-server.heyhey.cloud";

// SSE 메시지 파싱 헬퍼 함수
function processSSEMessage(message: string, onMessage: (data: SSEMessage) => void) {
  const trimmed = message.trim();
  if (!trimmed) return;

  // 1) data: 형식인 경우 (표준 SSE)
  if (trimmed.startsWith("data:")) {
    const jsonStr = trimmed.slice(5).trim();
    if (jsonStr) {
      try {
        const jsonData = JSON.parse(jsonStr);
        console.log("[SSE] data: 형식 파싱 성공:", jsonData);
        onMessage(jsonData);
      } catch (e) {
        console.error("[SSE] data: 형식 JSON 파싱 실패:", jsonStr, e);
      }
    }
    return;
  }

  // 2) 바로 JSON이 오는 경우 (서버가 data: 없이 보낼 때)
  if (trimmed.startsWith("{")) {
    try {
      const jsonData = JSON.parse(trimmed);
      console.log("[SSE] 직접 JSON 파싱 성공:", jsonData);
      onMessage(jsonData);
    } catch (e) {
      console.error("[SSE] 직접 JSON 파싱 실패:", trimmed.substring(0, 100), e);
    }
    return;
  }

  // 3) 여러 줄로 나눠서 오는 경우
  const lines = trimmed.split("\n");
  for (const line of lines) {
    const lineTrimmed = line.trim();
    if (lineTrimmed.startsWith("{")) {
      try {
        const jsonData = JSON.parse(lineTrimmed);
        console.log("[SSE] 라인별 JSON 파싱 성공:", jsonData);
        onMessage(jsonData);
      } catch (e) {
        // 불완전한 JSON일 수 있음 - 무시
      }
    }
  }
}

export const adkApi = {
  postMessage: async (config: unknown, onMessage: (data: SSEMessage) => void, onError?: (error: Error) => void) => {
    const data = {
      user_id: "test_user",
      config: config
    };

    console.log("[SSE] 요청 시작:", `${API_URL}/messages/run_sse`);
    console.log("[SSE] 요청 데이터:", JSON.stringify(data, null, 2));
    const response = await fetch(`${API_URL}/messages/run_sse`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream"
      },
      body: JSON.stringify(data)
    });

    console.log("[SSE] 응답 상태:", response.status, response.statusText);
    console.log("[SSE] 응답 헤더:", Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error = new Error(`API Error: ${response.status} - ${JSON.stringify(errorData)}`);
      onError?.(error);
      throw error;
    }

    if (!response.body) {
      throw new Error("Response body is null");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    try {
      console.log("[SSE] 스트림 읽기 시작...");
      while (true) {
        const { done, value } = await reader.read();
        console.log("[SSE] read() 결과 - done:", done, ", value 길이:", value?.length || 0);
        if (done) {
          console.log("[SSE] 스트림 완료");
          // 남은 버퍼 처리
          if (buffer.trim()) {
            processSSEMessage(buffer, onMessage);
          }
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        console.log("[SSE] 청크 수신 (길이:", chunk.length, "):", chunk.substring(0, 200));

        buffer += chunk;

        // SSE 메시지는 \n\n 또는 빈 줄로 구분됨
        // 완전한 메시지 단위로 처리
        const messages = buffer.split(/\n\n/);
        // 마지막 요소는 불완전할 수 있으므로 버퍼에 보관
        buffer = messages.pop() || "";

        for (const message of messages) {
          if (message.trim()) {
            processSSEMessage(message, onMessage);
          }
        }
      }
    } finally {
      console.log("[SSE] reader 해제");
      reader.releaseLock();
    }
  }
};

// aspirational_dreamer|  empathetic_supporter| playful_entertainer| rational_advisor

// {
//   results : [
//     { message_type:” aspirational_dreamer|  empathetic_supporter| playful_entertainer| rational_advisor”,title :”” , cotent : “”, estimation : “평가”, conclusion : “설명”}
//   ]
//   }
