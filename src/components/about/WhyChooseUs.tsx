"use client";

import {
  Users,
  Cpu,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import HospitalStats from "./HospitalStats";

const features = [
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Highly qualified doctors, surgeons and healthcare professionals delivering world-class care.",
  },
  {
    icon: Cpu,
    title: "Advanced Infrastructure",
    description:
      "State-of-the-art facilities equipped with modern diagnostic and treatment technology.",
  },
  {
    icon: ShieldCheck,
    title: "Patient Safety",
    description:
      "Strict infection control, ethical practices and international safety protocols.",
  },
  {
    icon: Clock3,
    title: "24×7 Emergency",
    description:
      "Round-the-clock emergency care with dedicated trauma and ICU support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mb-12  lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-[3px] text-primary">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl lg:text-5xl">
            Care You Can Trust
          </h2>
        </div>

        <div className="grid gap-8 xl:grid-cols-7">

          {/* Left */}

          <div className="grid gap-6 sm:grid-cols-2 xl:col-span-4">

            {features.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light transition-all duration-300 group-hover:bg-primary">
                  <item.icon
                    size={28}
                    className="text-primary transition-all duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-heading">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-light">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

          {/* Right */}

          <div className="xl:col-span-3">
            <HospitalStats />
          </div>

        </div>

      </div>
    </section>
  );
}