"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MENU_LIST } from "../constants/sidebar-menu.constants";
import { MenuList } from "../type/sidebar";

export default function Sidebar() {
  const E_COMMERCE_LOGO = "/logo/e-c-logo.png";
  const SIDEBAR_MENU: MenuList[] = MENU_LIST;
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);
  return (
    <>
      <Link href="/">
        <Image
          src={E_COMMERCE_LOGO}
          className="ml-[45px]"
          alt="e-commerce management logo"
          width={88}
          height={30}
        />
      </Link>
      <div className="mt-8 text-white">
        {SIDEBAR_MENU.map((list, idx) => {
          const isActive = currentPath.startsWith(list.route || "");
          return (
            <Link
              key={idx}
              href={list.route || ""}
              className="relative flex items-center gap-3 cursor-pointer h-[72px]  pl-[45px] hover:bg-blue-800 transition-all ease-in-out"
            >
              <span
                className={clsx(
                  isActive ? "left-0 " : "-left-1",
                  "absolute w-1   top-0 h-full bg-white rounded-tr-full rounded-br-full transition-all ease-in-out"
                )}
              ></span>
              <Image
                src={isActive ? list?.activeIcon : list?.defaultIcon}
                alt={list.name}
                width={24}
                height={24}
              />
              <p
                className={clsx(
                  isActive ? "text-white" : "text-indigo-200",
                  "font-medium ease-in-out transition-all"
                )}
              >
                {list.name}
              </p>
            </Link>
          );
        })}
      </div>
    </>
  );
}
