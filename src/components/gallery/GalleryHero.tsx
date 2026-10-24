"use client";

import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/heroBanners/gallery_banner.webp";

export default function GalleryHero() {
  return (
    <section className="relative h-[320px] overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[560px]">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="Our Departments"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/45 to-transparent" />

      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
        <div className="max-w-2xl">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center gap-2 text-sm text-white/80">
            <Link
              href="/"
              className="transition hover:text-secondary"
            >
              Home
            </Link>

            <span>/</span>

            <span className="font-medium text-secondary">
              Gallery
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-5 text-2xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
           Gallery
          </h1>

          {/* Underline */}
          <div className="mb-6 h-1 w-24 rounded-full bg-secondary" />

          {/* Description */}
          <p className="max-w-xl text-base leading-8 text-white/90 md:text-lg">
            A glimpse of Our Hospital - our advanced infrastructure, modern facilities and patient-first care.
          </p>
        </div>
      </div>
    </section>
  )
}
