"use client";

const Header = () => {
  const scrollToSection = (sectionNumber: number) => {
    const section = document.getElementById(`section-${sectionNumber}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <div className="logo-icon">✨</div>
          <span className="logo-text">손님뜰</span>
        </div>
        <nav className="header-nav">
          <button className="nav-link" onClick={() => scrollToSection(1)}>
            기능 소개
          </button>
          <button className="nav-link" onClick={() => scrollToSection(2)}>
            성과 예측
          </button>
          <button className="nav-link" onClick={() => scrollToSection(3)}>
            요금제
          </button>
        </nav>
        <div className="header-actions">
          <span className="login-text">로그인</span>
          <button className="start-button">시작하기</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
