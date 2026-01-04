"use client";

import { Persona } from "./_data";
import { useState } from "react";
import PersonaModal from "./persona-modal";
import Image from "next/image";

export default function PersonaCard({
  persona,
  onSelect,
  selected,
}: {
  persona: Persona;
  onSelect: () => void;
  selected: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 8개
  const bgColors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-red-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-orange-100",
    "bg-gray-100",
  ];
  const textColors = [
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-red-500",
    "text-purple-500",
    "text-pink-500",
    "text-orange-500",
    "text-gray-500",
  ];
  const textColor = textColors[persona.idx % textColors.length];
  const bgColor = bgColors[persona.idx % bgColors.length];

  // 선택 시 색상 매핑
  const borderColors = [
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
    "border-red-500",
    "border-purple-500",
    "border-pink-500",
    "border-orange-500",
    "border-gray-500",
  ];
  const selectedBgColors = [
    "bg-blue-50",
    "bg-green-50",
    "bg-yellow-50",
    "bg-red-50",
    "bg-purple-50",
    "bg-pink-50",
    "bg-orange-50",
    "bg-gray-50",
  ];

  const borderColor = borderColors[persona.idx % borderColors.length];
  const selectedBgColor =
    selectedBgColors[persona.idx % selectedBgColors.length];

  return (
    <>
      <div
        className={`w-[280px] h-[280px] rounded-lg p-4 border-2 transition-all hover:shadow-md cursor-pointer flex flex-col ${
          selected
            ? `${borderColor} ${selectedBgColor}`
            : "border-gray-300 bg-white hover:border-gray-400"
        }`}
        onClick={onSelect}
      >
        {/* header */}
        <div className="flex items-center gap-3 border-b border-gray-300 pb-3 mb-3 shrink-0">
          <div
            className={`text-base font-bold ${bgColor} ${textColor} w-10 h-10 flex items-center justify-center rounded-full shrink-0`}
          >
            <Image
              src={`/persona/${persona.idx}.png`}
              className="w-10 h-10 object-cover rounded-full"
              alt={persona.name}
              width={40}
              height={40}
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-base font-semibold text-gray-700 truncate">
              {persona.name}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div>{persona.age}세</div>
              <div className="truncate">{persona.occupation}</div>
            </div>
          </div>
        </div>

        {/* 간단한 미리보기 */}
        <div className="mb-4 space-y-3 flex-1 overflow-hidden">
          <div>
            <div className="text-xs font-semibold text-gray-600 mb-1">
              쇼핑 패턴
            </div>
            <div className="text-xs text-gray-500 line-clamp-2">
              {persona.shopping_pattern[0]}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-600 mb-1">
              쇼핑 선호도
            </div>
            <div className="text-xs text-gray-500 line-clamp-2">
              {persona.preferences[0]}
            </div>
          </div>
        </div>

        {/* 버튼 */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className="w-full px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors shrink-0"
        >
          상세보기
        </button>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <PersonaModal
          persona={persona}
          selected={selected}
          onSelect={onSelect}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
