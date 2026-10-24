"use client";

import { LucideIcon } from "lucide-react";

import CountUp from "../common/CountUp";

interface Props {
  icon: LucideIcon;
  value: number;
  label: string;
  suffix?: string;
}

export default function StatCard({
  icon: Icon,
  value,
  label,
  suffix,
}: Props) {
  return (
    <article className="flex items-center gap-5">
      <div className="rounded-2xl bg-white/15 p-4">
        <Icon size={34} className="text-white" />
      </div>

      <div>
        <div className="flex items-end">
          <CountUp
            from={0}
            to={value}
            separator=","
            direction="up"
            duration={1}
            delay={0}
            className="text-4xl font-bold text-white"
          />

          {suffix ? (
            <span className="ml-1 text-2xl font-semibold text-white">
              {suffix}
            </span>
          ) : (
            <span className="ml-1 text-3xl font-bold text-white">
              +
            </span>
          )}
        </div>

        <p className="mt-2 text-white/90">
          {label}
        </p>
      </div>
    </article>
  );
}