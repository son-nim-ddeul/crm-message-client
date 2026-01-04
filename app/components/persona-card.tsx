export interface Persona {
  id: number;
  name: string;
  nickname: string;
  age: number;
  job: string;
  shopping_style: string[];
  shopping_preference: string[];
  life_style: string;
}

export default function PersonaCard({
  persona,
  onClick,
  selected,
}: {
  persona: Persona;
  onClick: () => void;
  selected: boolean;
}) {
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
  const textColor = textColors[persona.id % textColors.length];
  const bgColor = bgColors[persona.id % bgColors.length];
  return (
    <div
      className={`w-80 h-90 bg-white rounded-lg p-6 border-2 cursor-pointer ${
        selected ? "border-2 border-blue-500" : "border-gray-300"
      }`}
      onClick={onClick}
    >
      {/* header */}
      <div
        className={`flex items-center gap-2 border-b border-gray-400 pb-4 mb-4`}
      >
        <div>
          <div
            className={`text-lg font-bold ${bgColor} ${textColor} w-12 h-12 flex items-center justify-center rounded-full`}
          >
            {persona.name.slice(0, 1).toUpperCase()}
          </div>
        </div>

        <div>
          <div className="text-lg text-gray-700">
            {persona.name}({persona.nickname})
          </div>
          <div className="flex items-center gap-2 text-md text-gray-500">
            <div>{persona.age}세</div>
            <div>{persona.job}</div>
          </div>
        </div>
        {/* <div className="text-sm text-gray-500">{persona.nickname}</div> */}
      </div>

      {/* content */}
      <div className="flex flex-col gap-4">
        <ShoppingContent label="쇼핑 패턴" contents={persona.shopping_style} />

        <ShoppingContent
          label="쇼핑 선호도"
          contents={persona.shopping_preference}
        />
        <ShoppingContent label="생활 스타일" content={persona.life_style} />
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
  return (
    <div>
      <div className="text-sm font-bold text-gray-400">{label}</div>
      <div className="text-gray-500 flex gap-2 mt-1">
        {contents?.map((style) => (
          <div
            key={style}
            className="text-gray-500 bg-gray-50 rounded-md px-2 py-1 text-xs"
          >
            {style}
          </div>
        ))}
        {content && <div className="text-gray-500 text-sm">{content}</div>}
      </div>
    </div>
  );
};
