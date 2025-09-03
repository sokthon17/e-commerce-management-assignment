import TopNavigation from "./TopNavigation";

export function DasboardContentLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation title={title} />
      <div className="w-full h-full place-content-center text-center text-4xl py-4 px-2">
        {children}
      </div>
    </>
  );
}
