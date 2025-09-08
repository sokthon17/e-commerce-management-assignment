import { BaseButton } from '@/core/components/BaseButton';

export function DateSelection() {
  return (
    <BaseButton
      className="outline_gray_300 border-transparent px-3.5 py-2.5 text-gray-500"
      label="Select Date"
      icon="/svg/date-picker-gray.svg"
    />
  );
}
