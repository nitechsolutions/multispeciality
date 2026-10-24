"use client";

import {
  Users,
  Award,
  HeartHandshake,
  BriefcaseMedical,
} from "lucide-react";

import CountUp from "../common/CountUp";

const stats = [
  {
    icon: Users,
    value: 50,
    label: "Expert Doctors",
  },
  {
    icon: Award,
    value: 15,
    label: "Specialities",
  },
  {
    icon: BriefcaseMedical,
    value: 20,
    label: "Years Experience",
  },
  {
    icon: HeartHandshake,
    value: 50000,
    label: "Happy Patients",
  },
];

export default function DoctorsStats() {
  return (
    <section className="relative mt-0 sm:-mt-10 lg:-mt-14 z-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className=" grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-5 shadow-lg sm:gap-6 sm:p-6 lg:grid-cols-4 lg:gap-8 lg:rounded-3xl lg:p-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex items-center gap-3 sm:gap-4"
              >
                <div className="rounded-xl bg-primary-light p-2 sm:p-3 lg:p-4">
                  <Icon
                    size={20}
                    className="text-primary sm:h-6 sm:w-6 lg:h-8 lg:w-8"
                  />
                </div>

                <div>
                  <div className="flex items-center">
                    <CountUp
                      from={0}
                      to={stat.value}
                      separator=","
                      direction="up"
                      duration={1}
                      delay={0}
                      className="count-up-text text-lg font-bold text-heading sm:text-xl lg:text-2xl"
                    />

                    <span className="text-lg font-bold text-heading sm:text-2xl lg:text-3xl">
                      +
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-text-light sm:text-sm lg:text-base"
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}