"use client";

import CountUp from "../common/CountUp";

import {
  Award,
  HeartHandshake,
  Users,
  Stethoscope,
  Building2,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 15,
    label: "Years of Excellence",
  },
  {
    icon: HeartHandshake,
    value: 50,
    label: "Specialities",
  },
  {
    icon: Users,
    value: 150000,
    label: "Happy Patients",
  },
  {
    icon: Stethoscope,
    value: 200,
    label: "Expert Doctors",
  },
  {
    icon: Building2,
    value: 500,
    label: "Hospital Staff",
  },
  {
    icon: Clock3,
    value: 24,
    label: "Emergency Care",
    suffix: "/7",
  },
];

export default function HospitalStats() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl ">

        <div className="rounded-[32px] bg-gradient-to-br from-primary to-secondary p-8 text-white shadow-xl lg:p-12">

          <div className="grid gap-8 grid-cols-2 lg:grid-cols-2 space-y-6">

            {stats.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4"
              >
                <div className="rounded-2xl bg-white/15 p-4">
                  <item.icon size={34} />
                </div>

                <div>

                  <div className="flex items-end">

                    <CountUp
                      from={0}
                      to={item.value}
                      separator=","
                      duration={1}
                      direction="up"
                      delay={0}
                      className="text-xl font-bold"
                    />

                    {item.suffix ? (
                      <span className="ml-1 text-2xl font-semibold">
                        {item.suffix}
                      </span>
                    ) : (
                      <span className="ml-1 text-3xl font-bold">
                        +
                      </span>
                    )}

                  </div>

                  <p className="mt-1 text-white/90">
                    {item.label}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}