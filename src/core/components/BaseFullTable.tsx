import Image from 'next/image';
import { TableHeader, TableRow } from '../type/table-type';

export default function BaseFullTable<T>({
  header,
  data,
  body,
  bodyClass
}: {
  body: (item: T) => TableRow;
  data: T[];
  bodyClass?: (item: T) => string;
  header: TableHeader[];
}) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-max table-auto border-collapse">
        <thead className="text-sm">
          <tr className="border-b border-b-[#F0F1F3]">
            {header.map((list, idx) => (
              <th className="px-[22px] py-[18px] text-left whitespace-nowrap" key={idx}>
                <div className="flex items-center justify-between gap-2.5">
                  <div className="flex justify-between gap-2.5">
                    {list.bulkSelect && list.bulkSelect}
                    <button
                      onClick={list.sort}
                      className="flex items-center gap-1 text-sm text-[#353535]"
                    >
                      {list.label}
                    </button>
                  </div>
                  <Image
                    src="/svg/arrow-down-gray-500-16.svg"
                    alt="arrow down"
                    className="cursor-pointer"
                    width={16}
                    height={16}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            const rowCells = body(item);
            return (
              <tr
                key={idx}
                className={
                  bodyClass
                    ? bodyClass(item)
                    : 'h-20 cursor-pointer border-b border-b-[#F0F1F3] text-left'
                }
              >
                {rowCells.map((cell, idx) => (
                  <td
                    key={idx}
                    className="gap-2.5 truncate px-[22px] py-[18px] text-left text-sm leading-6 tracking-[-.31px] text-[#6E7079]"
                  >
                    {cell.th ?? cell.td}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
