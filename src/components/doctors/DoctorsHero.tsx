"use client";

import Image from "next/image";
import Link from "next/link";

import heroImage from "@/assets/heroBanners/doctor_banner.webp";

export default function DoctorsHero() {
  return (
    <section className="relative overflow-hidden bg-section-blue h-[320px] overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[560px]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Doctors"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/45 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-xl">

          <div className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>

           <span>/</span>

            <span className="font-medium text-secondary">
              Doctors
            </span>
          </div>

          <h1 className="mb-5 text-2xl font-bold text-heading md:text-5xl text-white">
            Meet Our Expert Doctors
          </h1>
                <div className="mb-6 h-1 w-24 rounded-full bg-secondary" />

          <p className="mt-6 text-sm md:text-lg md:leading-8 text-text text-white">
            Our highly experienced specialists provide world-class treatment
            using advanced medical technology with compassionate patient care.
          </p>
        </div>
      </div>
    </section>
  );
}