import { MessageResult, MessageType } from "@/app/store/response-store";
import { BarChart3, Brain, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ResultCardProps {
  result: MessageResult;
  messageType: MessageType;
}

const ResultCard = ({ result, messageType }: ResultCardProps) => {
  const [isEstimationOpen, setIsEstimationOpen] = useState(false);
  const [isConclusionOpen, setIsConclusionOpen] = useState(false);
  const colorClasses: Record<
    string,
    { border: string; bg: string; text: string; topBg: string }
  > = {
    aspirational_dreamer: {
      border: "border-pink-500",
      bg: "bg-pink-50",
      text: "text-pink-600",
      topBg: "bg-pink-500",
    },
    empathetic_supporter: {
      border: "border-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-600",
      topBg: "bg-blue-500",
    },
    playful_entertainer: {
      border: "border-red-500",
      bg: "bg-red-50",
      text: "text-red-600",
      topBg: "bg-red-500",
    },
    rational_advisor: {
      border: "border-gray-200",
      bg: "bg-purple-50",
      text: "text-purple-600",
      topBg: "bg-purple-500",
    },
  };

  const colors = colorClasses[messageType] || colorClasses.aspirational_dreamer;

  const mapTypeToTitle = (type: string) => {
    switch (type) {
      case "aspirational_dreamer":
        return "열망 자극형";
      case "empathetic_supporter":
        return "공감 지원형";
      case "playful_entertainer":
        return "즐거움 엔터테이너형";
      case "rational_advisor":
        return "이성적 조언자형";
      default:
        return type;
    }
  };

  return (
    <div
      className={`bg-gray-50 rounded-lg border-2 transition-all hover:shadow-lg border-gray-200 w-[400px]`}
    >
      <div className={`h-1 ${colors.topBg} rounded-t-lg`} />

      {/* 카드 내용 */}
      <div className="p-6">
        <div className="mb-4">
          <div
            className={`text-xs border w-fit ${colors.border} rounded-full px-4 py-1 font-semibold ${colors.text}`}
          >
            {mapTypeToTitle(messageType)}
          </div>
        </div>

        <div className="bg-white w-[340px] rounded-xl p-4 shadow-lg m-auto">
          <div className="text-md font-bold mb-2">{result.title}</div>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {result.content}
            </p>
          </div>
        </div>

        {/* Estimation 아코디언 */}
        <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsEstimationOpen(!isEstimationOpen)}
            className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-500" />
              <span className="text-md font-bold text-gray-600">
                평가(Estimation)
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                isEstimationOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isEstimationOpen ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line bg-white">
              {result.estimation}
            </div>
          </div>
        </div>

        {/* Conclusion 아코디언 */}
        <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setIsConclusionOpen(!isConclusionOpen)}
            className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-500" />
              <span className="text-md font-bold text-gray-600">
                설명(Conclusion)
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                isConclusionOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isConclusionOpen ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line bg-white">
              {result.conclusion}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
