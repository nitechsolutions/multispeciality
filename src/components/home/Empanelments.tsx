"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";

import { empanelments } from "@/data/empanelments";
import EmpanelmentCard from "../common/EmpanelmentCard";

export default function Empanelments() {
  const featuredEmpanelments = empanelments.slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-section-light left-bg py-14 sm:py-16 lg:py-20">
      {/* ================= Background ================= */}

    

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= Heading ================= */}

        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-primary sm:text-base lg:text-lg">
            OUR NETWORK
          </span>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>

            <span className="ml-1 h-1 w-14 rounded-full bg-primary"></span>
          </div>

          <h2 className="mt-5 font-heading text-xl font-semibold text-heading sm:text-3xl lg:text-4xl">
            Our Empanelments
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-light sm:text-base lg:text-lg">
            We are empanelled with leading insurance companies, TPAs, corporates
            and government healthcare schemes to provide cashless treatment for
            every patient.
          </p>
        </div>

        {/* ================= Main Card ================= */}

        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-lg">
          {/* ================= Top ================= */}

          <div className="flex flex-col gap-6 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
              {/* Icon */}

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-light sm:h-20 sm:w-20">
                <ShieldCheck size={34} className="text-primary" />
              </div>

              {/* Text */}

              <div>
                <h3 className="text-xl font-semibold text-primary sm:text-2xl">
                  Cashless Treatment Partners
                </h3>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium text-text-light sm:justify-start sm:text-sm">
                  <span>Insurance Companies</span>

                  <span className="hidden sm:block text-primary">|</span>

                  <span>TPAs</span>

                  <span className="hidden sm:block text-primary">|</span>

                  <span>Corporate Partners</span>

                  <span className="hidden sm:block text-primary">|</span>

                  <span>Government Schemes</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Divider ================= */}

          <div className="flex items-center px-5 sm:px-8 lg:px-10">
            <div className="h-px flex-1 bg-border" />

            <div className="mx-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary sm:h-12 sm:w-12">
              <ShieldCheck size={20} className="text-white" />
            </div>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* ================= Cards ================= */}

          <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 sm:p-6 lg:grid-cols-6 xl:grid-cols-6">
            {featuredEmpanelments.map((item) => (
              <EmpanelmentCard key={item.id} empanelment={item} />
            ))}
          </div>

          {/* ================= Bottom ================= */}

          <div className="border-t border-border bg-section-blue p-5 sm:p-7 lg:p-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              {/* Left */}

              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-light sm:h-20 sm:w-20">
                  <HeartHandshake size={34} className="text-primary" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-heading sm:text-2xl">
                    Your Health, Our Priority
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-text-light sm:text-base">
                    Our empanelments ensure you receive quality healthcare with
                    cashless treatment, trusted insurance support and complete
                    peace of mind.
                  </p>
                </div>
              </div>

              {/* Right */}

              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/empanelments"
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover sm:px-7 sm:py-3.5"
                >
                  View All Empanelments
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
