import { BaseButton } from '@/core/components/BaseButton';

export default function ProductFilter() {
  return (
    <BaseButton
      label="Filter"
      icon="/svg/filter-gray-20.svg"
      className="outline_gray_300 w-full border-transparent px-3.5 py-2.5 text-gray-500"
    />
  );
}
