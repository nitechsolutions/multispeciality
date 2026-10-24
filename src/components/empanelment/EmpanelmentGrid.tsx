"use client";

import { empanelments } from "@/data/empanelments";
import EmpanelmentCard from "../common/EmpanelmentCard";

export default function EmpanelmentGrid() {
  return (
    <section className="pt-10 pb-5">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="mt-3 text-2xl font-bold text-heading md:text-4xl">
            Our Empanelled Partners
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-secondary" />
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-lg leading-8">
            We are proudly associated with reputed TPAs, insurance providers,
            government organizations, corporate companies and public sector
            units.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {empanelments.map((item) => (
            <EmpanelmentCard key={item.id} empanelment={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
