"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import DoctorCard from "../common/DoctorCard";
import { departments } from "@/data/department";
import DepartmentCard from "../department/DepartmentCard";

export default function Departments() {
    const featuredDepartments = departments.slice(0, 4);
    
  return (
    <section className="relative overflow-hidden right-bg py-14 sm:py-16 lg:py-20">
      {/* ================= Background ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Left Blur */}
        <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-primary/5 blur-3xl sm:h-72 sm:w-72 lg:h-[420px] lg:w-[420px]" />

        {/* Right Blur */}
        <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-secondary/5 blur-3xl sm:h-72 sm:w-72 lg:h-[420px] lg:w-[420px]" />

        {/* Bottom Blur */}
        <div className="absolute bottom-10 left-1/3 hidden h-64 w-64 rounded-full bg-accent/5 blur-3xl lg:block" />

       

        {/* Decorative Dots */}
        <div className="absolute left-6 top-12 hidden opacity-30 md:block lg:left-14 lg:top-20">
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-primary"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* ================= Heading ================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-primary sm:text-base lg:text-lg">
            OUR DEPARTMENTS
          </span>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="ml-1 h-1 w-14 rounded-full bg-primary" />
          </div>

          <h2 className="mt-5 font-heading text-3xl font-semibold text-heading sm:text-4xl lg:text-5xl">
            Explore Medical Departments
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-light sm:text-base lg:text-lg">
            Discover comprehensive healthcare across multiple specialties,
    delivered by experienced doctors using advanced medical technology
    and compassionate, patient-focused care.
          </p>
        </div>

        {/* ================= Doctors Grid ================= */}
         <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {featuredDepartments.map((department) => (
                    <DepartmentCard
                      key={department.id}
                      department={department}
                    />
                  ))}
                </div>

        {/* ================= CTA ================= */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/departments"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-primary
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-primary
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-primary-hover
              sm:px-8
              sm:py-3.5
              sm:text-base
            "
          >
            View All

            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
