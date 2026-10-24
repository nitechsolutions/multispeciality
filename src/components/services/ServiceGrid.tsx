"use client";

import { services } from "@/data/services";
import ServiceCard from "../common/ServiceCard";

export default function ServiceGrid() {
  return (
    <section className="bg-background py-8 sm:py-10 lg:py-15">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <h2 className="mt-5 text-2xl font-bold text-heading sm:text-4xl lg:text-5xl">
            Our Healthcare Services
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-secondary" />

          <p className="mt-6 leading-8 text-sm sm:text-lg">
            We provide comprehensive healthcare services with advanced
            technology, experienced specialists, and patient-centred care under
            one roof to ensure the best treatment for every patient.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="md:mt-20 mt-10 rounded-[30px] bg-gradient-to-r from-primary to-secondary p-8 text-center shadow-lg sm:p-5">
          <h3 className="text-xl font-bold text-white sm:text-3xl">
            Looking for a Specific Healthcare Service?
          </h3>

          <p className="mx-auto mt-4 max-w-4xl text-sm md:leading-8 leading-6 text-white/90">
            Our experienced medical team is available 24/7 to help you choose
            the right healthcare service based on your medical needs. Contact us
            today and let us guide you towards better health.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/appointment"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-primary text-sm transition hover:scale-105"
            >
              Book Appointment
            </a>

            <a
              href="tel:+919876543210"
              className="rounded-xl border border-white px-7 py-3 font-semibold text-white transition text-sm hover:bg-white hover:text-primary"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}