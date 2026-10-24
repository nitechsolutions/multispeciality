"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./NavLinks";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}

      <div className="hidden bg-gradient-to-r from-primary via-primary to-secondary text-white shadow-sm lg:block">
        <div className="container mx-auto flex h-7 items-center justify-between text-xs font-medium">
          <p>Mon–Sat: 10:00am–2:00pm | 5:00pm–8:30pm | 24×7 Emergency Services</p>

          <div className="flex gap-8">
            <span>📞 +91 9876543210</span>
            <span>✉ info@mthospital.com</span>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(15,108,189,0.08)]">
        <div className="container mx-auto flex h-[80px] items-center justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary text-2xl font-bold text-white shadow-lg shadow-primary/20">
              MT
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-heading">
                MT Hospital
              </h2>

              <p className="text-sm font-medium text-text-light">
                Multi Speciality Hospital
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => (
              <div key={item.title} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-medium transition
                  ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden items-center gap-4 lg:flex">
            {/* <a
              href="tel:+919876543210"
              className="flex items-center rounded gap-2 font-semibold text-white bg-green-500"
            >
              <Phone size={18} />
              Call Now
            </a> */}

            <Link
              href="/appointment"
              className="rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary/90"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile */}

          <button onClick={() => setOpen(!open)} className="lg:hidden mr-4">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <MobileMenu open={open} />
      </header>
    </>
  );
}
