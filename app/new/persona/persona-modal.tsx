"use client";

import Image from "next/image";
import { Persona } from "./_data";
import { X } from "lucide-react";

interface PersonaModalProps {
  persona: Persona;
  selected: boolean;
  onSelect: () => void;
  onClose: () => void;
}

export default function PersonaModal({
  persona,
  selected,
  onSelect,
  onClose,
}: PersonaModalProps) {
  // 색상 매핑
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

  return (
    <div
      className="fixed inset-0 bg-[#00000080] flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-300 `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4 border-b border-gray-400 pb-4 flex-1">
            <div>
              <div
                className={`text-2xl font-bold ${bgColor} ${textColor} w-16 h-16 flex items-center justify-center rounded-full`}
              >
                <Image
                  src={`/persona/${persona.idx}.png`}
                  className="w-10 h-10 object-cover rounded-full"
                  alt={persona.name}
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <div>
              <div className="text-2xl text-gray-700 font-bold">
                {persona.name}
              </div>
              <div className="flex items-center gap-2 text-lg text-gray-500 mt-1">
                <div>{persona.age}세</div>
                <div>{persona.occupation}</div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* 내용 */}
        <div className="flex flex-col gap-6 mb-6">
          <ShoppingContent
            label="쇼핑 패턴"
            contents={persona.shopping_pattern}
          />
          <ShoppingContent label="쇼핑 선호도" contents={persona.preferences} />
          <ShoppingContent label="생활 스타일" contents={persona.lifestyle} />
          <ShoppingContent label="불편함" contents={persona.pain_points} />
          <ShoppingContent
            label="고객 여정"
            content={persona.customer_journey}
          />
        </div>

        {/* 선택 버튼 */}
        <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            닫기
          </button>
          <button
            onClick={() => {
              onSelect();
              onClose();
            }}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-colors ${
              selected
                ? "bg-gray-500 hover:bg-gray-600"
                : "bg-main hover:bg-main-hover"
            }`}
          >
            {selected ? "선택 해제" : "선택하기"}
          </button>
        </div>
      </div>
    </div>
  );
}

const ShoppingContent = ({
  label,
  contents,
  content,
}: {
  label: string;
  contents?: string[];
  content?: string;
}) => {
  const getColorForText = (text: string) => {
    const colors = [
      { bg: "bg-blue-50", text: "text-blue-700" },
      { bg: "bg-purple-50", text: "text-purple-700" },
      { bg: "bg-pink-50", text: "text-pink-700" },
      { bg: "bg-green-50", text: "text-green-700" },
      { bg: "bg-yellow-50", text: "text-yellow-700" },
      { bg: "bg-orange-50", text: "text-orange-700" },
      { bg: "bg-indigo-50", text: "text-indigo-700" },
      { bg: "bg-teal-50", text: "text-teal-700" },
      { bg: "bg-cyan-50", text: "text-cyan-700" },
      { bg: "bg-rose-50", text: "text-rose-700" },
    ];

    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
  };

  return (
    <div>
      <div className="text-base font-bold text-gray-700 mb-2">{label}</div>
      <div className="text-gray-600 flex flex-wrap gap-2">
        {contents?.map((style) => {
          const colors = getColorForText(style);
          return (
            <div
              key={style}
              className={`${colors.bg} ${colors.text} rounded-md px-3 py-1.5 text-sm`}
            >
              {style}
            </div>
          );
        })}
        {content && (
          <div className="text-gray-600 text-base leading-relaxed">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};
