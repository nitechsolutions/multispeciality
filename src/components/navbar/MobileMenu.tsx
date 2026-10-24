"use client";

import Link from "next/link";
import { navLinks } from "./NavLinks";
import { usePathname } from "next/navigation";

interface Props {
  open: boolean;
}

export default function MobileMenu({ open }: Props) {
  if (!open) return null;

   const pathname = usePathname();


  return (
    <div className="lg:hidden fixed w-full  border-t border-gray-300 shadow-xl rounded-b-lg bg-white">
      <div className="container mx-auto flex flex-col pb-4">
        {navLinks.map((item) => (
          <div key={item.title}>
            <Link
              href={item.href}
              className={`block py-2 pl-3 font-medium text-gray-700 hover:text-primary
                 ${
                    pathname === item.href
                      ? "text-white bg-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}