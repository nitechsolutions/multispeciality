"use client";
import { Service } from "@/data/services";

interface Props {
  service: Service;
}


export default function ServiceCard({ service }: Props) {
  return (
      <div
              key={service.id}
              className="group flex overflow-hidden rounded-2xl border border-gray-200 hover:bg-background hover:border hover:border-primary bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 active:translate-y-2 "
            >
              {/* Number */}

              <div className="flex w-20 sm:w-24 lg:w-28 items-center justify-center border-r border-border bg-section-alt">

                <span className="text-4xl font-bold text-slate-200 sm:text-5xl lg:text-6xl">
                  {String(service.id).padStart(2, "0")}
                </span>

              </div>

              {/* Content */}

              <div className="flex-1 p-5 sm:p-6">

                <h3 className="lg:text-lg text-md font-semibold text-heading">
                  {service.title}
                </h3>

                <p className="mt-2 lg:text-sm text-xs leading-6 text-text-light">
                  {service.description}
                </p>

              </div>
            </div>
  );
}