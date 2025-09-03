import Link from "next/link";
import { Breadcrumbs } from "../type/breadcrumbs";

export default function BreadCrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumbs;
}) {
  return (
    <div className="flex gap-1">
      {breadcrumbs &&
        breadcrumbs.map((breadcrumb, idx, array) => (
          <>
            <Link
              className="first:text-blue-700 text-gray-600 text-sm leading-5"
              key={idx}
              href={breadcrumb.url}
            >
              {breadcrumb.label}
            </Link>
            {idx !== array.length - 1 && <span className="px-1">/</span>}
          </>
        ))}
    </div>
  );
}
