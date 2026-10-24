"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ChevronRight,
} from "lucide-react";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Services", href: "/services" },
  { title: "Departments", href: "/departments" },
  { title: "Doctors", href: "/doctors" },
  { title: "Empanelment", href: "/empanelment" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "General Surgery",
  "Pediatrics",
  "Gynecology",
  "Emergency Care",
  "Radiology",
];

export default function Footer() {
  return (
    <footer className=" bg-[#0F172A] text-white">

      <div className="mx-auto max-w-7xl px-6 py-15">

        <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr_370px]">

          {/* CONTACT */}

          <div>

            <h2 className="mb-10 font-heading md:text-3xl text-2xl font-semibold">
              Contact Information
            </h2>

            <div className="space-y-8">

              {/* Phone */}

              <div className="flex items-start gap-5">

                <div className="flex md:h-14 md:w-14 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary">
                  <Phone size={18} />
                </div>

                <div>

                  <h4 className="mb-2 md:text-lg text-base font-semibold">
                    Emergency
                  </h4>

                  <a
                    href="tel:+919999999999"
                    className="block text-sm text-slate-300 transition hover:text-secondary"
                  >
                    +91 99999 99999
                  </a>

                  <a
                    href="tel:+918888888888"
                    className="block text-sm text-slate-300 transition hover:text-secondary"
                  >
                    +91 88888 88888
                  </a>

                </div>

              </div>

              {/* Email */}

              <div className="flex items-start gap-5">

                <div className="flex md:h-14 md:w-14 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary">
                  <Mail size={18} />
                </div>

                <div>

                  <h4 className="mb-2 md:text-lg text-base font-semibold">
                    Email
                  </h4>

                  <a
                    href="mailto:info@mthospital.com"
                    className="text-slate-300 text-sm transition hover:text-secondary"
                  >
                    info@mthospital.com
                  </a>

                </div>

              </div>

              {/* Address */}

              <div className="flex items-start gap-5">

                <div className="flex md:h-14 md:w-14 h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary">
                  <MapPin size={18} />
                </div>

                <div>

                  <h4 className="mb-2 md:text-lg font-semibold">
                    Address
                  </h4>

                  <p className="max-w-md text-sm leading-8 text-slate-300">
                    Rajendra Nagar Chowk,
                    Opp. Old Bus Stand,
                    Bilaspur,
                    Chhattisgarh 495001
                  </p>

                </div>

              </div>

            </div>

            {/* Social */}

            {/* <div className="mt-10 flex gap-4">

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-secondary hover:text-white"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-secondary hover:text-white"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-300 transition hover:bg-secondary hover:text-white"
              >
                <Linkedin size={18} />
              </a>

            </div> */}

          </div>

          {/* MIDDLE */}

          <div className="space-y-12">

            {/* Quick Links */}

            <div>

              <h2 className="mb-6 font-heading md:text-3xl text-2xl font-semibold">
                Quick Links
              </h2>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4">

                {quickLinks.map((link) => (

                  <Link
                    key={link.title}
                    href={link.href}
                    className="flex items-center gap-2 text-slate-300 transition hover:text-secondary text-sm md:text-base"
                  >
                    <ChevronRight size={16} />

                    {link.title}

                  </Link>

                ))}

              </div>

            </div>

            {/* Departments */}

            <div>

              <h2 className="mb-6 font-heading md:text-3xl text-2xl font-semibold">
                Departments
              </h2>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4">

                {departments.map((item) => (

                  <span
                    key={item}
                    className="flex items-center gap-2 text-slate-300 text-sm md:text-base"
                  >
                    <ChevronRight size={16} />

                    {item}

                  </span>

                ))}

              </div>

            </div>

          </div>

          {/* WORKING HOURS STARTS HERE */}
                    {/* Working Hours */}

          <div className="relative">

            {/* Floating Clock */}

            <div className="absolute left-1/2 top-0 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-footer bg-secondary shadow-xl">
              <Clock3
                size={32}
                className="text-white "
              />
            </div>

            {/* Card */}

            <div className="rounded-[36px] bg-secondary px-5 pb-6 pt-10 shadow-xl">

              <h2 className="text-center font-heading md:text-3xl text-xl font-bold text-white">
                Working Hours
              </h2>

              <div className="mt-6 space-y-4">

                {/* Morning */}

                <div className="text-center">

                  <h3 className="md:text-xl  font-semibold">
                    Monday – Saturday
                  </h3>

                  <p className="mt-3 text-white/80 text-sm md:text-base">
                    Morning
                  </p>

                  <p className="mt-2 md:text-lg font-bold">
                    09:00 AM – 02:00 PM
                  </p>

                </div>

                <div className="h-px bg-white/20" />

                {/* Evening */}

                <div className="text-center">


                  <p className="mt-3 text-white/80 text-sm md:text-base">
                    Evening
                  </p>

                  <p className="mt-2 md:text-lg font-bold">
                    04:00 PM – 08:00 PM
                  </p>

                </div>

                <div className="h-px bg-white/20" />

                {/* Sunday */}

                <div className="text-center">

                  <h3 className="md:text-xl font-semibold">
                    Sunday
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-white/80">
                    Emergency Services Only
                  </p>

                  <p className="mt-2 md:text-lg font-bold">
                    24 × 7 Emergency
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 md:flex-row">

          <p className="text-center text-sm text-slate-400 md:text-left">
            © {new Date().getFullYear()} MT Hospital. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm">

            <Link
              href="/privacy-policy"
              className="text-slate-400 transition hover:text-secondary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="text-slate-400 transition hover:text-secondary"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/contact"
              className="text-slate-400 transition hover:text-secondary"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}