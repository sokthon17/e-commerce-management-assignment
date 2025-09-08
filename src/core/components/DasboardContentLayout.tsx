import TopNavigation from './TopNavigation';

export function DasboardContentLayout({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <TopNavigation title={title} />
      <div className="relative h-full w-full px-3 py-4 text-4xl">{children}</div>
    </>
  );
}
