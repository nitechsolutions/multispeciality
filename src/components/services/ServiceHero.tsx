"use client";

import Link from "next/link";
import Image from "next/image";

import heroImage from "@/assets/heroBanners/service_banner.webp";

export default function ServiceHero() {
  return (
    <section className="relative h-[320px] overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[560px]">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Healthcare Services"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/45 to-transparent" />

      {/* Bottom Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
            <Link
              href="/"
              className="transition-colors hover:text-secondary"
            >
              Home
            </Link>

            <span>/</span>

            <span className="font-medium text-secondary">
              Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Healthcare Services
          </h1>

          {/* Underline */}
          <div className="mb-6 h-1 w-24 rounded-full bg-secondary" />

          {/* Description */}
          <p className="max-w-xl text-sm md:leading-8 text-white/90 md:text-lg">
            We provide comprehensive healthcare services with advanced
            medical technology, experienced professionals, and
            patient-centred care to ensure the highest standards of
            treatment for every individual.
          </p>
        </div>
      </div>
    </section>
  );
}