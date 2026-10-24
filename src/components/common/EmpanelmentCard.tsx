"use client";

import Image from "next/image";
import { Empanelment } from "@/data/empanelments";

interface Props {
  empanelment: Empanelment;
}

export default function EmpanelmentCard({ empanelment }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg">
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />

      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="flex h-15 items-center justify-center">
          <Image
            src={empanelment.logo}
            alt={empanelment.name}
            width={180}
            height={80}
            className="max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="mt-6 flex justify-center">
        <span className="h-1 w-10 rounded-full bg-primary transition-all duration-300 group-hover:w-20" />
      </div>
    </div>
  );
}