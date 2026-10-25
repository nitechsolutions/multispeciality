"use client";

import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, ShieldCheck, UserRound } from "lucide-react";

import heroImage from "@/assets/heroBanners/about_banner.webp";

const features = [
  {
    icon: UserRound,
    title: "Patient First",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Ethical Practice",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
  },
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-section-blue h-[320px] overflow-hidden sm:h-[380px] md:h-[450px] lg:h-[560px]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="About MT Hospital"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/45 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 lg:px-8">
        <div className="max-w-xl">

          <div className="mb-6 flex items-center gap-2 text-sm text-white/80">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>

            <span>/</span>

            <span className="font-medium text-secondary">
              About Us
            </span>
          </div>

          <h1 className="mb-5 text-2xl font-bold text-heading md:text-5xl  text-white">
            About MT Hospital
          </h1>
         <div className="mb-6 h-1 w-24 rounded-full bg-secondary" />


          <p className="mt-6 text-sm  md:text-lg leading-8 text-white">
            MT Hospital is a multispeciality healthcare institution
            committed to providing compassionate, advanced and
            affordable care to every patient with excellence.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-500 p-5 shadow-md"
              >
                <item.icon
                  className="text-secondary"
                  size={28}
                />

                <p className="mt-3 text-sm font-semibold text-heading text-white">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}