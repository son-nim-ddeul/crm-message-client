import Image from "next/image";

const Main1Page = () => {
  return (
    <section id="section-1" className="section section-1">
      <div className="flex flex-col items-center justify-center min-h-full px-4 py-20">
        <div className="max-w-6xl w-full flex flex-col items-center">
          {/* 작은 라벨 */}
          <div className="mb-6 px-4 py-1.5 bg-blue-50 rounded-full flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #5389ffc4 0%, rgba(255, 255, 255, 0.915) 100%)",
              }}
            />
            <span className="text-sm font-medium text-blue-600">
              새로운 AI 에이전트 출시
            </span>
          </div>

          {/* 메인 제목 */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-6 leading-tight">
            고객의 마음을 읽는{" "}
            <span className="text-purple-600">AI 마케팅 파트너, 손님뜰</span>
          </h1>

          {/* 설명 텍스트 */}
          <p className="text-lg md:text-xl text-gray-600 text-center mb-10 max-w-2xl">
            AI가 완벽한 CRM 메시지를 작성하고, 발송 전 성과를 미리 예측합니다.
            데이터에 기반한 선택으로 마케팅 효율을 극대화하세요.
          </p>

          {/* 버튼 그룹 */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              무료로 시작하기
              <span className="text-xl">→</span>
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold text-lg border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <span className="text-xl">⊙</span>
              데모 영상 보기
            </button>
          </div>

          {/* 이미지 */}
          <div className="w-full max-w-5xl">
            <Image
              src="/main.png"
              alt="손님뜰 AI 메시지 생성 및 성과 예측"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main1Page;
