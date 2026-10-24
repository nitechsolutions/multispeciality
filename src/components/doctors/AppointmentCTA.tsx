"use client";

import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
} from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="pb-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-primary to-secondary px-8 py-10 shadow-xl lg:px-14">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-white/20 p-5 sm:flex hidden">
                <CalendarDays
                  size={40}
                  className="text-white "
                />
              </div>

              <div>

                <h2 className="md:text-3xl text-lg font-bold text-white">
                  Need an Appointment?
                </h2>

                <p className="mt-3 max-w-xl text-white/90">
                  Schedule your consultation with our experienced doctors
                  and receive personalized treatment for a healthier future.
                </p>

              </div>

            </div>

            <Link
              href="/contact"
              className="inline-flex text-sm md:text-md items-center gap-3 rounded-xl bg-white px-6 py-2 md:px-7 md:py-3 font-semibold text-primary transition hover:scale-105"
            >
              Book Appointment

              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}