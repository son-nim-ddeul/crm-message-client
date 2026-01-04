"use client";
import NewTitle from "@/app/components/new-title";
import PersonaCard from "@/app/components/persona-card";
import StepNavigation from "@/app/components/step-navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PersonaPage() {
  const title = "페르소나 선택";
  const description = `AI가 분석할 타겟 고객의 페르소나를 선택해주세요. \n 선택된 페르소나를 기반으로 가장 효과적인 마케팅 메시지를 생성합니다`;

  const personas = [
    {
      id: 1,
      name: "김민수1",
      nickname: "트렌드 팔로워",
      age: 27,
      job: "대학생/취준생",
      shopping_style: ["SNS 광고 반응", "모바일 결제"],
      shopping_preference: ["한정판", "가성비 보단 가심비"],
      life_style:
        "트렌디한 카페와 팝업스토어 방문을 즐기며, 인스타그램에 경험 공유하는 것을 중요하게 생각함.",
    },
    {
      id: 2,
      name: "이영희",
      nickname: "스마트맘",
      age: 35,
      job: "주부",
      shopping_style: ["공동구매", "가격비교"],
      shopping_preference: ["친환경", "유기농"],
      life_style:
        "자녀 교육과 건강한 먹거리에 관심이 많으며, 맘카페 커뮤니티 정보를 신뢰함.",
    },
    {
      id: 3,
      name: "박지성",
      nickname: "비즈니스 프로",
      age: 42,
      job: "대기업 팀장",
      shopping_style: ["구독 서비스", "온라인몰"],
      shopping_preference: ["시간절약", "프리미엄"],
      life_style:
        "바쁜 업무로 인해 효율을 중시하며, 주말에는 골프나 스테이케이션으로 휴식을 즐김.",
    },
    {
      id: 4,
      name: "최현우",
      nickname: "테크 얼리어답터",
      age: 29,
      job: "IT 개발자",
      shopping_style: ["해외직구", "크라우드 펀딩"],
      shopping_preference: ["최신기술", "스펙"],
      life_style:
        "신제품 리뷰 영상을 즐기며, IT 커뮤니티에 적극 참여. 재택근무 선호.",
    },
    {
      id: 5,
      name: "정수진",
      nickname: "웰니스 추구",
      age: 33,
      job: "필라테스 강사",
      shopping_style: ["정기배송", "라이브커머스"],
      shopping_preference: ["건강", "자기관리"],
      life_style:
        "건강한 라이프스타일을 추구하며, 요가와 명상을 통해 몸과 마음을 관리함.",
    },
    {
      id: 6,
      name: "강철수",
      nickname: "액티브 시니어",
      age: 62,
      job: "은퇴 사업가",
      shopping_style: ["TV홈쇼핑", "지인추천"],
      shopping_preference: ["신뢰", "여행"],
      life_style:
        "활발한 활동을 즐기며, 여행과 새로운 경험을 중시함. 건강관리에 관심이 많음.",
    },
    {
      id: 7,
      name: "한미소",
      nickname: "문화 예술인",
      age: 28,
      job: "프리랜서 디자이너",
      shopping_style: ["편집샵", "인스타마켓"],
      shopping_preference: ["디자인", "감성"],
      life_style:
        "예술과 문화에 깊은 관심을 가지고, 독특한 스타일을 추구함. 전시회와 공연을 즐김.",
    },
    {
      id: 8,
      name: "윤도현",
      nickname: "1인 가구",
      age: 31,
      job: "영업직",
      shopping_style: ["편의점", "배달앱"],
      shopping_preference: ["간편함", "소량구매"],
      life_style:
        "효율적인 생활을 중시하며, 간편한 소비를 선호함. 혼자만의 시간을 소중히 여김.",
    },
  ];

  const [selectedPersonaId, setSelectedPersonaId] = useState<number | null>(
    null
  );

  const router = useRouter();

  const onNext = () => {
    if (selectedPersonaId === null) {
      return;
    }
    router.push(`/new/purpose`);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <NewTitle title={title} description={description} />
      <div className="flex flex-wrap justify-center gap-8 px-20 pb-8">
        {personas.map((persona) => (
          <PersonaCard
            key={persona.id}
            persona={persona}
            onClick={() =>
              selectedPersonaId === persona.id
                ? setSelectedPersonaId(null)
                : setSelectedPersonaId(persona.id)
            }
            selected={selectedPersonaId === persona.id || false}
          />
        ))}
      </div>
      <StepNavigation
        onPrevious={() => router.push("/")}
        onNext={onNext}
        nextDisabled={!selectedPersonaId}
      />
    </div>
  );
}
