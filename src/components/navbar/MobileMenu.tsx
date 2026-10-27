
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./NavLinks";

interface Props {
  open: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({
  open,
  closeMenu,
}: Props) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div
      id="mobile-navigation"
      className="absolute left-0 top-full w-full border-t border-border bg-white shadow-xl lg:hidden"
    >
      <nav className="container mx-auto flex max-h-[calc(100dvh-80px)] flex-col overflow-y-auto ">
        {navLinks.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              onClick={closeMenu}
              aria-current={isActive ? "page" : undefined}
              className={` px-6 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-primary-light hover:text-primary"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
