"use client";

import Link from "next/link";

import {
  ShieldCheck,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function CashlessCTA() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="overflow-hidden rounded-[30px] bg-gradient-to-r from-primary to-secondary p-8 lg:p-12">

          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div className="flex items-start gap-5">

              <div className="rounded-2xl bg-white/20 p-5 hidden md:block">
                <ShieldCheck
                  size={40}
                  className="text-white"
                />
              </div>

              <div>

                <h2 className="text-xl md:text-2xl font-bold text-white">
                  Cashless & Hassle-Free Treatment
                </h2>

                <p className="mt-4 max-w-2xl text-xs md:text-base text-white/90">
                  We provide seamless cashless admission
                  for eligible insurance, TPA, corporate,
                  and government empanelments. Our team
                  takes care of the documentation while
                  you focus on recovery.
                </p>

              </div>

            </div>

            <div className="flex flex-col gap-4">

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-4 py-2 font-semibold text-primary transition hover:scale-105"
              >
                Book Appointment

                <ArrowRight size={18} />
              </Link>

              <div className="flex items-center justify-center gap-2 text-white">

                <Phone size={18} />

                <span className="font-semibold">
                  +91 98765 43210
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}