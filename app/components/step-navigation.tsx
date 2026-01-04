interface StepNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  previousLabel?: string;
  nextLabel?: string;
  centerText?: string;
  nextDisabled?: boolean;
}

export default function StepNavigation({
  onPrevious,
  onNext,
  previousLabel = "이전",
  nextLabel = "다음",
  centerText,
  nextDisabled = false,
}: StepNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-8 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 이전 버튼 */}
        <button
          onClick={onPrevious}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
            onPrevious
              ? "bg-gray-500 text-white hover:bg-gray-600 cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
          disabled={!onPrevious}
        >
          {previousLabel}
        </button>

        {/* 중간 텍스트 */}
        {centerText && (
          <div className="text-gray-600 font-medium">{centerText}</div>
        )}

        {/* 다음 버튼 */}
        <button
          onClick={onNext}
          className={`px-4 py-2 rounded-lg font-semibold text-white transition-colors cursor-pointer ${
            nextDisabled || !onNext
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-main hover:bg-main/80"
          }`}
          disabled={nextDisabled || !onNext}
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
}
