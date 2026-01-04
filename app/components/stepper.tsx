"use client";

import { Check } from "lucide-react";
import { usePathname } from "next/navigation";

const steps = [
  { number: 1, label: "페르소나 선정" },
  { number: 2, label: "메시지 목적" },
  { number: 3, label: "메시지 톤 및 매너" },
  { number: 4, label: "메시지 생성 및 성과 예측" },
];

export default function Stepper() {
  const pathname = usePathname();

  const getStepStatus = (stepNumber: number) => {
    if (pathname === "/new/persona") {
      // 1 진행중, 2,3,4 끄기
      if (stepNumber === 1) return "active";
      return "disabled";
    }
    if (pathname === "/new/purpose") {
      // 1 완료, 2 진행중, 3,4 끄기
      if (stepNumber === 1) return "completed";
      if (stepNumber === 2) return "active";
      return "disabled";
    }
    if (pathname === "/new/tone" || pathname === "/new/submit") {
      // 1,2 완료, 3 진행중, 4 끄기
      if (stepNumber === 1 || stepNumber === 2) return "completed";
      if (stepNumber === 3) return "active";
      return "disabled";
    }
    return "disabled";
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 w-full">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {steps.map((step) => {
          const status = getStepStatus(step.number);
          const isCompleted = status === "completed";
          const isActive = status === "active";

          return (
            <div
              key={step.number}
              className="flex flex-col items-center flex-1"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <span className="text-xs">{step.number}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  isCompleted
                    ? "text-green-600"
                    : isActive
                    ? "text-purple-600"
                    : "text-gray-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
