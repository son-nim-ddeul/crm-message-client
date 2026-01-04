"use client";
import NewTitle from "@/app/components/new-title";
import { ArrowLeft, RotateCw } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ResultCard from "./result-card";

export default function ResultPage() {
  const router = useRouter();
  const description = `AI가 분석한 고객 데이터를 바탕으로 4가지 최적의 메시지 전략을 제안합니다.`;

  const [results] = useState([
    {
      id: 1,
      type: "감성 자극형",
      content: `[손님뜰] 김철수님, 따뜻한 봄햇살처럼 기분 좋은 하루 보내고 계신가요? 🌸 지난번 방문해주셨을 때의 환한 미소가 기억에 남습니다. 바쁘신 일상 속 작은 쉼표가 필요하실 때, 언제든 편하게 들러주세요. 정성스런 한 끼 준비해두겠습니다.`,
      openRate: 24,
      conversionRate: 4.2,
      color: "pink",
    },
    {
      id: 2,
      type: "혜택 강조형",
      content: `[손님뜰] 김철수님만을 위한 Secret 쿠폰 도착! 🎁 이번 주말까지만 사용 가능한 '전 메뉴 15% 할인' 쿠폰을 드립니다. 맛있는 식사하시고 기분 전환 하세요! (결제 시 이 문자를 보여주세요)`,
      openRate: 45,
      conversionRate: 8.5,
      color: "blue",
    },
    {
      id: 3,
      type: "긴급성 강조",
      content: `[손님뜰] 마감임박! 시즌 한정 메뉴 종료 D-3 많은 사랑을 받았던 '봄나물 비빔밥'이 곧 종료됩니다. 아쉬움이 남지 않도록 마지막 기회를 놓치지 마세요. 오늘 예약하시면 음료 서비스!`,
      openRate: 38,
      conversionRate: 6.1,
      color: "red",
    },
    {
      id: 4,
      type: "VIP 우대형",
      content: `[손님뜰] 김철수님은 저희 매장의 소중한 VIP입니다. 👑 항상 잊지 않고 찾아주셔서 감사합니다. 감사의 마음을 담아 다음 방문 시 셰프 스페셜 사이드 메뉴를 무료로 제공해 드립니다. 예약 시 말씀해주세요.`,
      openRate: 52,
      conversionRate: 12.4,
      color: "purple",
    },
  ]);

  const [selectedResultId, setSelectedResultId] = useState<number | null>(null);

  const onReset = () => {
    router.push("/");
  };

  const onSend = () => {
    // copy
    const selectedResult = results.find(
      (result) => result.id === selectedResultId
    );
    if (selectedResult) {
      navigator.clipboard.writeText(selectedResult.content);
      alert("해당 기능은 준비 중입니다. 메시지가 복사되었습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <div className="flex flex-col items-center pt-8">
        <NewTitle title="추천 메시지 결과" description={description} />

        <div className="w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((result) => (
              <ResultCard
                key={result.id}
                result={result}
                selected={selectedResultId === result.id}
                onSelect={() =>
                  setSelectedResultId(
                    selectedResultId === result.id ? null : result.id
                  )
                }
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
              selectedResultId
                ? "bg-main hover:bg-main-hover"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            disabled={!selectedResultId}
            onClick={onSend}
          >
            선택 메시지 발송하기
          </button>
        </div>
      </div>
    </div>
  );
}
