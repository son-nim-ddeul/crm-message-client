"use client";

import { Sparkles } from "lucide-react";
import Link from "next/link";

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
          <Sparkles className="logo-icon" />
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
          <Link className="start-button" href="/new">
            시작하기
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
