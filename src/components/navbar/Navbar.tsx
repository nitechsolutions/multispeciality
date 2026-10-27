
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./NavLinks";
import { useAppointment } from "../common/appointment/AppointmentProvider";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { openAppointment } = useAppointment();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);



  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-gradient-to-r from-primary via-primary to-secondary text-white shadow-sm lg:block">
        <div className="container mx-auto flex h-7 items-center justify-between text-xs font-medium">
          <p>
            Mon–Sat: 10:00am–2:00pm | 5:00pm–8:30pm | 24×7 Emergency Services
          </p>

          <div className="flex gap-8">
            <span>📞 +91 9876543210</span>
            <span>✉ info@mthospital.com</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 shadow-[0_4px_20px_rgba(15,108,189,0.08)] backdrop-blur-xl">
        <div className="container mx-auto flex h-[80px] items-center justify-between px-4 sm:px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary to-secondary text-xl font-bold text-white shadow-lg shadow-primary/20 sm:h-14 sm:w-14 sm:rounded-2xl sm:text-2xl">
              MT
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold tracking-tight text-heading sm:text-2xl">
                MT Hospital
              </h2>

              <p className="text-xs font-medium text-text-light sm:text-sm">
                Multi Speciality Hospital
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center rounded-xl px-3 py-1 font-medium transition ${
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "text-gray-700 hover:bg-primary-light hover:text-primary"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Desktop Appointment Button */}
          <div className="hidden items-center xl:flex">
            <button
              type="button"
              onClick={openAppointment}
              className="rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setOpen((previous) => !previous)}
            className="ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-heading transition hover:bg-primary-light hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <MobileMenu
          open={open}
          closeMenu={() => setOpen(false)}
          
        />
      </header>
    </>
  );
}
