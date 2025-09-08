import AccountHub from './AccountHub';

export default function TopNavigation({ title }: { title: string }) {
  return (
    <div className="flex h-[60px] w-full justify-between border-b border-solid border-b-gray-200 px-6 text-left">
      <h2 className="text-xl font-medium text-gray-800">{title}</h2>
      <AccountHub />
    </div>
  );
}
