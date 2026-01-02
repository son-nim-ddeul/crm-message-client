const Main3Page = () => {
  return (
    <section id="section-3" className="section section-3">
      <div className="flex items-center justify-center">
        <div className="w-full">
          {/* 보라색 영역 */}
          <div
            className="p-30 text-center text-white shadow-2xl"
            style={{
              background: "linear-gradient(to bottom right, #5400a3, #993cea)",
            }}
          >
            <h2 className="text-5xl font-bold mb-15">
              지금 바로 마케팅 효율을 높이세요
            </h2>
            <p className="text-xl mb-4 text-white mx-auto">
              14일 무료 체험으로 손님뜰의 강력한 AI 기능을 경험해보세요.
            </p>
            <p className="text-xl mb-8 text-white mx-auto">
              신용카드 정보 입력 없이 바로 시작할 수 있습니다.
            </p>
            <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors">
              무료로 시작하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main3Page;
