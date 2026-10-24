"use client";

import { departments } from "@/data/department";
import DepartmentCard from "./DepartmentCard";


export default function DepartmentGrid() {
  return (
    <section className="bg-background py-15">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 text-center">

          <h2 className="mt-3 text-2xl md:text-4xl font-bold text-heading">
            Explore Our Departments
          </h2>
 <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-secondary" />
          <p className="mx-auto mt-5 max-w-3xl text-sm md:text-lg leading-8 text-text-light">
            We provide comprehensive healthcare across multiple specialties
            using modern technology and highly experienced medical
            professionals.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((department) => (
            <DepartmentCard
              key={department.id}
              department={department}
            />
          ))}
        </div>
      </div>
    </section>
  );
}