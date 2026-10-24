"use client";

import Image from "next/image";

import { Department } from "@/data/department";

interface Props {
  department: Department;
}

export default function DepartmentCard({ department }: Props) {
  const Icon = department.icon;

  return (
    <div
      className="group relative block md:h-[350px] h-[250px] overflow-hidden rounded-3xl shadow-lg"
    >
      {/* Background Image */}
      <Image
        src={department.image}
        alt={department.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10 group-hover:from-black/90 group-hover:via-black/65 group-hover:to-black/20 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-7">
        <div className="transform transition-all duration-500 group-hover:-translate-y-3">
          {/* Icon */}
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-md">
            <Icon
              className="h-8 w-8 text-white"
              strokeWidth={2}
            />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white">
            {department.name}
          </h3>

          {/* Description */}
          <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100 group-active:max-h-40 group-active:opacity-100">
            <p className="text-sm leading-7 text-white/90">
              {department.description}
            </p>

            {/* <div className="mt-6 inline-flex items-center gap-2 font-semibold text-secondary">
              Learn More

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}