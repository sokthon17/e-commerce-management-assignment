export default function TopNavigation({ title }: { title: string }) {
  return (
    <div className="h-[60px] w-full place-content-center border-b border-solid border-b-gray-200 px-6 text-left">
      <h2 className="text-xl font-medium text-gray-800">{title}</h2>
      <div></div>
    </div>
  );
}
