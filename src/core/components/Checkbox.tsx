import Image from 'next/image';

export default function CheckboxComponent({
  checked,
  onChange,
  icons = '/svg/checkbox-white.svg'
}: {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  icons?: string;
}) {
  return (
    <label className="block w-fit">
      <input
        type="checkbox"
        name="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={onChange}
      />
      <span className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-md border-2 border-gray-400 peer-checked:border-blue-700 peer-checked:bg-blue-700">
        <Image src={icons} alt="checkbox" width={10} height={12} />
      </span>
    </label>
  );
}
