"use client";

import NewTitle from "@/app/components/new-title";
import { File, MapPlus } from "lucide-react";
import StepNavigation from "@/app/components/step-navigation";
import Stepper from "@/app/components/stepper";
import { useRouter } from "next/navigation";
import { useMessageStore } from "@/app/store/message-store";
import Link from "next/link";

const TonePage = () => {
  const router = useRouter();

  const { additionalRequests, setAdditionalRequests } = useMessageStore();

  const onNext = () => {
    router.push("/new/submit");
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24 flex flex-col items-center">
      <Stepper currentStep={4} />
      <NewTitle
        title="메시지 발송 정보 입력"
        description="메시지 발송 정보를 입력해주세요."
      />

      <div className="flex flex-col gap-16 w-full max-w-4xl px-4">
        {/* RAG 파일 관리 */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="text-xl font-bold text-gray-600 flex items-center gap-2">
              <File className="w-5 h-5 text-main" />
              파일 관리
            </div>
            <Link
              href="/files"
              className="bg-main text-white px-4 py-2 rounded-lg hover:bg-main-hover text-xs w-fit"
              target="_blank"
            >
              파일 관리 페이지로 이동
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            파일 관리 페이지로 이동하여 파일을 추가해주세요. (선택사항)
            <br />
            성과 예측에 사용되는 데이터를 관리합니다.
          </div>
        </div>

        {/* 추가 요청 사항 */}
        <div className="flex flex-col gap-4">
          <div className="text-xl font-bold text-gray-600 flex items-center gap-2">
            <MapPlus className="w-5 h-5 text-main" />
            추가 요청 사항
            <span className="text-sm font-normal text-gray-400 ml-2">
              선택사항
            </span>
          </div>
          <div>
            <textarea
              value={additionalRequests}
              onChange={(e) => setAdditionalRequests(e.target.value)}
              placeholder="메시지에 꼭 포함되어야 하는 키워드나, 제외하고 싶은 표현이 있다면 적어주세요. (예: '최대 30% 할인' 문구 필수 포함, 너무 딱딱한 표현 지양)"
              className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent"
            />
          </div>
        </div>
      </div>
      <StepNavigation
        onPrevious={() => router.push("/new/tone")}
        onNext={onNext}
      />
    </div>
  );
};

export default TonePage;
