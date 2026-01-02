export default function MessagePage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl font-bold">메시지 info 페이지 {params.id}</h1>
    </div>
  );
}

