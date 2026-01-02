import { MessageSquare, BarChart3, RefreshCw } from "lucide-react";

const Main2Page = () => {
  return (
    <section id="section-2" className="section section-2">
      <div className="flex flex-col items-center justify-center min-h-full px-4 py-20">
        <div className="max-w-6xl w-full">
          {/* 제목 섹션 */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              마케팅의 모든 과정을{" "}
              <span className="text-blue-600">자동화하세요</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              복잡한 데이터 분석과 카피라이팅 고민은 이제 그만. 손님뜰 AI가
              당신의 비즈니스 성장을 위한 최적의 파트너가 되어드립니다.
            </p>
          </div>

          {/* 카드 그룹 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 카드 1: 초개인화 메시지 생성 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                초개인화 메시지 생성
              </h3>
              <p className="text-gray-600 leading-relaxed">
                고객 데이터를 분석하여 개인 맞춤형 메시지를 자동으로 생성합니다.
                각 고객의 특성에 맞는 최적의 메시지를 제공합니다.
              </p>
            </div>

            {/* 카드 2: 발송 전 성과 예측 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                발송 전 성과 예측
              </h3>
              <p className="text-gray-600 leading-relaxed">
                AI가 메시지 발송 전 오픈율, 클릭률, 전환율을 예측하여 최적의
                메시지를 선택할 수 있도록 도와줍니다.
              </p>
            </div>

            {/* 카드 3: 지속적인 학습 및 최적화 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                지속적인 학습 및 최적화
              </h3>
              <p className="text-gray-600 leading-relaxed">
                실시간 피드백을 통해 지속적으로 학습하고 최적화하여 더 나은
                성과를 만들어냅니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main2Page;
