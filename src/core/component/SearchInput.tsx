import Image from 'next/image';

export function SearchInputComponent({ placeholder }: { placeholder: string }) {
  const SEARCH_ICON = '/svg/search-gray-20.svg';
  return (
    <div className="outline_gray_300 flex w-full max-w-full flex-row justify-around bg-white px-4 py-1 text-sm leading-5 font-normal text-gray-900 ring-offset-0">
      <Image src={SEARCH_ICON} alt="search" width={20} height={20} />
      <input
        className="ml-2.5 max-w-full flex-grow bg-transparent placeholder:text-base placeholder:font-normal placeholder:text-gray-400 focus:outline-none"
        name="Search Product"
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}
