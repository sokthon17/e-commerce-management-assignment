import Image from "next/image";

export function SearchInputComponent() {
  const SEARCH_ICON = "/svg/search-gray-20.svg";
  return (
    <div className="flex flex-row justify-around w-full text-sm leading-5 font-normal rounded-md px-4 py-2.5 ring-offset-0 h-11 text-gray-900 max-w-full border border-solid bg-white border-gray-300">
      <Image src={SEARCH_ICON} alt="search" width={20} height={20} />
      <input
        className="focus:outline-none placeholder:text-base placeholder:font-normal placeholder:text-gray-400 ml-2.5 flex-grow bg-transparent max-w-full"
        name="Search Product"
        placeholder="Search order..."
        type="text"
      />
    </div>
  );
}
