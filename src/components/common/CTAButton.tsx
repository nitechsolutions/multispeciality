"use client";

import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { useAppointment } from "./appointment/AppointmentProvider";

interface CTAButtonProps {
  text?: string;
  href?: string;
  className?: string;
  appointment?: boolean;
  floating?: boolean;
}

export default function CTAButton({
  text = "Book an Appointment",
  href = "/appointment",
  className = "",
  appointment = true,
  floating = false,
}: CTAButtonProps) {
  const { openAppointment } = useAppointment();

  const buttonClass = `
    group inline-flex items-center justify-center gap-2.5
    rounded-xl bg-primary px-5 py-3.5
    text-sm font-semibold text-white
    shadow-lg shadow-primary/25
    transition-all duration-300
    hover:-translate-y-1 hover:bg-primary-hover hover:shadow-xl
    focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20
    active:translate-y-0
    cursor-pointer
    xl:hidden
    ${className}
  `;

  const floatingClass = floating
    ? "fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7"
    : "";

  if (appointment) {
    return (
      <button
        type="button"
        onClick={openAppointment}
        className={`${buttonClass} ${floatingClass}`}
      >
        {floating && <CalendarDays size={19} />}

        <span className="hidden lg:block">{text}</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 hidden lg:block"
        />
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`${buttonClass} ${floatingClass}`}
    >
      <span>{text}</span>
      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  );
}