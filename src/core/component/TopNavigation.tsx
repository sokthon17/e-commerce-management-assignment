export default function TopNavigation({ title }: { title: string }) {
  return (
    <div className="h-[60px] border-b border-solid border-b-gray-200 w-full px-6 text-left place-content-center">
      <h2 className="text-gray-800 text-xl font-medium">{title}</h2>
      <div></div>
    </div>
  );
}
