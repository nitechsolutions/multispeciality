"use client";

import {
  Shield,
  Medal,
  Handshake,
  Users,
  Globe,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold honesty, transparency and ethical medical practices.",
  },
  {
    icon: Medal,
    title: "Excellence",
    description:
      "Delivering outstanding healthcare through continuous improvement.",
  },
  {
    icon: Handshake,
    title: "Respect",
    description:
      "Every patient is treated with dignity, empathy and compassion.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaborative healthcare for better outcomes and patient satisfaction.",
  },
  {
    icon: Globe,
    title: "Responsibility",
    description:
      "Committed to our patients, society and sustainable healthcare.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-10 bg-secondary-light">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[3px] text-primary">
            Our Values
          </span>

          <h2 className="mt-3 text-4xl font-bold text-heading">
            The Values That Drive Us
          </h2>

        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {values.map((item) => (
            <div
              key={item.title}
              className="text-center"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <item.icon
                  size={36}
                  className="text-primary"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-heading">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-text-light">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}