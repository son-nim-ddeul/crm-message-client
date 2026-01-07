"use client";
import NewTitle from "@/app/components/new-title";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ResultCard from "./result-card";
import { useResponseStore, MessageType } from "@/app/store/response-store";

const MESSAGE_TYPES: MessageType[] = [
  "aspirational_dreamer",
  "empathetic_supporter",
  "playful_entertainer",
  "rational_advisor",
];

export default function ResultPage() {
  const router = useRouter();
  const { messageResponse } = useResponseStore();
  const description = `AI가 분석한 고객 데이터를 바탕으로 4가지 최적의 메시지 전략을 제안합니다.`;

  const [selectedType, setSelectedType] = useState<MessageType | null>(null);

  const onReset = () => {
    router.push("/");
  };

  const onSend = () => {
    if (selectedType && messageResponse) {
      const selected = messageResponse[selectedType];
      navigator.clipboard.writeText(`${selected.title}\n\n${selected.content}`);
      alert("메시지가 클립보드에 복사되었습니다!");
    }
  };

  if (!messageResponse) {
    return (
      <div className="min-h-screen bg-gray-100 pb-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            결과 데이터가 없습니다
          </h2>
          <p className="text-gray-600 mb-4">
            메시지 생성이 완료되지 않았습니다.
          </p>
          <button
            onClick={() => router.push("/new/persona")}
            className="px-6 py-3 bg-main text-white rounded-lg hover:bg-main-hover font-semibold"
          >
            처음부터 시작하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="flex flex-col items-center pt-8">
        <NewTitle title="추천 메시지 결과" description={description} />

        <div className="w-full max-w-7xl px-4">
          <div className="flex flex-wrap gap-20 justify-center">
            {MESSAGE_TYPES.map((type) => (
              <ResultCard
                key={type}
                result={messageResponse[type]}
                messageType={type}
              />
            ))}
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-12 flex gap-4">
          <button
            onClick={onReset}
            className="px-6 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 font-semibold"
          >
            홈으로 돌아가기
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
              selectedType
                ? "bg-main hover:bg-main-hover"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!selectedType}
            onClick={onSend}
          >
            선택 메시지 발송하기
          </button>
        </div>
      </div>
    </div>
  );
}
