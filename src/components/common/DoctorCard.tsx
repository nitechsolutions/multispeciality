"use client";

import Image from "next/image";
import { CalendarDays, Stethoscope } from "lucide-react";

import { Doctor } from "@/data/doctors";

interface Props {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: Props) {
  return (
    <article
      className=" group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg active:-translate-y-2 active:shadow-lg"
    >
      {/* Image */}
      <div className="relative overflow-hidden ">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={500}
          height={600}
          className="h-[270px] bg-gray-100 w-full object-cover transition-transform duration-500 group-active:scale-105 group-hover:scale-105 sm:h-[280px] lg:h-[350px] xl:h-[250px]"
          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,(max-width:1280px) 33vw,25vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
        {/* Name */}
        <h3 className="text-center text-lg font-semibold text-heading sm:text-2xl">
          {doctor.name}
        </h3>

        {/* Degree */}
        <p className="sm:mt-2 text-center text-sm font-medium text-primary sm:text-base">
          {doctor.degree}
        </p>

        {/* Details */}
        <div className="space-y-1 mt-2">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-primary-light p-2">
              <CalendarDays
                size={18}
                className="text-primary"
              />
            </div>

            <span className="sm:text-text  text-sm">
              {doctor.experience}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="rounded-full bg-secondary-light p-2">
              <Stethoscope
                size={18}
                className="text-secondary"
              />
            </div>

            <span className="sm:text-text text-sm">
              {doctor.speciality}
            </span>
          </div>
        </div>
        {/* Bottom Accent */}
        <div className="mt-6 h-1 w-16 self-center rounded-full bg-primary transition-all duration-300 group-hover:w-24 group-active:w-24" />
      </div>
    </article>
  );
}