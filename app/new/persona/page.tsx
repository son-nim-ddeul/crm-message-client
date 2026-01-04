"use client";
import NewTitle from "@/app/components/new-title";
import PersonaCard from "@/app/new/persona/persona-card";
import StepNavigation from "@/app/components/step-navigation";
import Stepper from "@/app/components/stepper";
import { useRouter } from "next/navigation";
import { personas } from "./_data";
import { useMessageStore } from "@/app/store/message-store";

export default function PersonaPage() {
  const title = "페르소나 선택";
  const description = `AI가 분석할 타겟 고객의 페르소나를 선택해주세요. \n 선택된 페르소나를 기반으로 가장 효과적인 마케팅 메시지를 생성합니다`;

  const { persona, setPersona } = useMessageStore();
  const router = useRouter();

  const onNext = () => {
    if (persona === null) {
      return;
    }
    router.push(`/new/purpose`);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <Stepper currentStep={1} />
      <NewTitle title={title} description={description} />
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 px-20 pb-8">
        {personas.map((personaItem) => (
          <PersonaCard
            key={personaItem.idx}
            persona={personaItem}
            onSelect={() =>
              persona?.idx === personaItem.idx
                ? setPersona(null)
                : setPersona(personaItem)
            }
            selected={persona?.idx === personaItem.idx || false}
          />
        ))}
      </div>
      <StepNavigation
        onPrevious={() => router.push("/")}
        onNext={onNext}
        nextDisabled={!persona}
      />
    </div>
  );
}
