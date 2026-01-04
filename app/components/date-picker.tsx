"use client";

import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface DatePickerProps {
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
}

export default function DatePicker({ selected, onSelect }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const formattedDate = selected
    ? format(selected, "MM/dd/yyyy", { locale: ko })
    : "";

  return (
    <div className="relative" ref={containerRef}>
      {/* 입력 필드 */}
      <div className="relative">
        <input
          type="text"
          readOnly
          value={formattedDate}
          placeholder="mm/dd/yyyy"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-main focus:border-transparent cursor-pointer bg-white"
        />
        <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>

      {/* 팝업 캘린더 */}
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 bg-white rounded-xl p-4 border border-gray-200 shadow-lg z-50">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              onSelect?.(date);
              setIsOpen(false);
            }}
            locale={ko}
          />
        </div>
      )}

      {/* 설명 텍스트 */}
      <p className="mt-2 text-sm text-gray-500">
        * 예정일을 입력하면 시즈널 키워드를 추천해드립니다.
      </p>
    </div>
  );
}
