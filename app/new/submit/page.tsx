"use client";
import NewTitle from "@/app/components/new-title";
import Stepper from "@/app/components/stepper";
import "../../design/loading.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMessageStore } from "@/app/store/message-store";

export default function LoadingPage() {
  const description = `AI 에이전트가 고객 데이터를 분석하여 \n 최적의 CRM 마케팅 메시지를 작성하고 있습니다.`;

  const router = useRouter();
  const { persona, purpose, kpis, date, tone, additionalRequests } =
    useMessageStore();

  useEffect(() => {
    setTimeout(() => {
      router.push("/new/result");
    }, 5000);
  }, [router, persona, purpose, kpis, date, tone, additionalRequests]);
  return (
    <div className="flex min-h-screen flex-col">
      <Stepper currentStep={5} />
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="relative">
          <div className="spinner" />
        </div>

        <NewTitle
          title="메시지 생성 및 성과 예측 중..."
          description={description}
        />
      </div>
    </div>
  );
}
