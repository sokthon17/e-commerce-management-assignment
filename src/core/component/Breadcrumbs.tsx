import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs } from '../type/breadcrumbs';

export default function BreadCrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumbs }) {
  return (
    <div className="flex gap-1">
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb, idx, array) => (
          <div key={idx} className="flex items-center text-sm font-medium">
            {breadcrumb.url ? (
              <Link className="text-sm leading-5 first:text-blue-700" href={breadcrumb.url}>
                {breadcrumb.label}
              </Link>
            ) : (
              <p className="text-gray-600">{breadcrumb.label}</p>
            )}
            {idx !== array.length - 1 && (
              <span className="px-1 text-sm">
                <Image src="/svg/ic-next-gray-200-16.svg" alt="arrow next" width={16} height={16} />
              </span>
            )}
          </div>
        ))}
    </div>
  );
}
