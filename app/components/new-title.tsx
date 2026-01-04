export default function NewTitle({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const descs = description.split("\n") as string[];
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="mt-4">
        {descs.map((desc, index) => (
          <p key={index} className="text-lg text-gray-500 text-center">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}
