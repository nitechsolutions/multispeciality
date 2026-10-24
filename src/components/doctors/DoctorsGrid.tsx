"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import DoctorCard from "../common/DoctorCard";
import { doctors } from "@/data/doctors";

export default function DoctorsGrid() {
  return (
    <section className="lg:py-15 py-10">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
            />
          ))}

        </div>

      </div>
    </section>
  );
}