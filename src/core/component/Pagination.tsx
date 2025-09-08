'use client';
import clsx from 'clsx';
import Image from 'next/image';
import { useMemo } from 'react';

type PaginationItem = { type: 'page'; value: number } | { type: 'ellipsis'; key: string };

interface PaginationProps {
  total: number;
  limit: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ total, limit, currentPage, onPageChange }: PaginationProps) {
  const totalPages = useMemo(() => {
    if (!total || !limit) return 1;
    return Math.ceil(total / limit);
  }, [total, limit]);

  const handleEllipsisClick = (key: string) => {
    if (key === 'left') {
      onPageChange(Math.max(1, currentPage - 3));
    } else {
      onPageChange(Math.min(totalPages, currentPage + 3));
    }
  };
  const paginationItems = usePaginationList({ totalPages, currentPage });

  const { hasPrev, hasNext, handlePrev, handleNext, startItem, endItem } = usePaginationState({
    currentPage,
    totalPages,
    total,
    limit,
    onPageChange
  });

  return (
    <div className="mt-6 flex w-full items-center justify-between text-sm">
      <p className="text-sm text-gray-600">
        Showing {startItem}-{endItem} from {total}
      </p>
      <div className="flex items-center justify-center gap-2">
        {hasPrev && (
          <PaginationButton action={handlePrev} icon="/svg/chevron-to-left-blue-20.svg" />
        )}
        <div className="flex items-center gap-2">
          {paginationItems.map((item, idx) =>
            item.type === 'page' ? (
              <PaginationButton
                key={idx}
                action={() => onPageChange(item.value)}
                label={String(item.value)}
                className={clsx(currentPage === item.value ? '!bg-blue-700 text-white' : '')}
              />
            ) : (
              <PaginationButton
                key={item.key}
                action={() => handleEllipsisClick(item.key)}
                label="..."
              />
            )
          )}
        </div>
        {hasNext && (
          <PaginationButton action={handleNext} icon="/svg/chevron-to-right-blue-20.svg" />
        )}
      </div>
    </div>
  );
}

const PaginationButton = ({
  action,
  className,
  icon,
  label
}: {
  action: () => void;
  className?: string;
  icon?: string;
  label?: string;
}) => {
  return (
    <button
      onClick={action}
      className={clsx(
        className,
        'h-8 w-8 rounded-lg bg-blue-700/15 p-1.5 text-blue-700 transition-all hover:bg-blue-700/70 hover:text-white'
      )}
    >
      {label && <p>{label}</p>}
      {icon && <Image src={icon} alt="pagination icon" width={20} height={20} />}
    </button>
  );
};

function usePaginationState({
  currentPage,
  totalPages,
  total,
  limit,
  onPageChange
}: {
  currentPage: number;
  totalPages: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}) {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;
  const handlePrev = () => hasPrev && onPageChange(currentPage - 1);
  const handleNext = () => hasNext && onPageChange(currentPage + 1);

  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, total);

  return { hasPrev, hasNext, handlePrev, handleNext, startItem, endItem };
}

function usePaginationList({
  totalPages,
  currentPage
}: {
  totalPages: number;
  currentPage: number;
}) {
  const paginationItems = useMemo(() => {
    if (totalPages <= 1) return [];

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => ({
        type: 'page' as const,
        value: i + 1
      }));
    }

    const items: PaginationItem[] = [];
    items.push({ type: 'page', value: 1 });

    switch (true) {
      case currentPage <= 4:
        for (let i = 2; i <= 5; i++) {
          items.push({ type: 'page', value: i });
        }
        items.push({ type: 'ellipsis', key: 'right' });
        items.push({ type: 'page', value: totalPages });
        break;
      case currentPage >= totalPages - 3:
        items.push({ type: 'ellipsis', key: 'left' });
        for (let i = totalPages - 4; i < totalPages; i++) {
          items.push({ type: 'page', value: i });
        }
        items.push({ type: 'page', value: totalPages });
        break;
      default:
        items.push({ type: 'ellipsis', key: 'left' });
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          items.push({ type: 'page', value: i });
        }
        items.push({ type: 'ellipsis', key: 'right' });
        items.push({ type: 'page', value: totalPages });
        break;
    }
    return items;
  }, [totalPages, currentPage]);

  return paginationItems;
}
