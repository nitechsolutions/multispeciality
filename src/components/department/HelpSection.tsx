"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, CalendarDays } from "lucide-react";

import doctorImage from "@/assets/home/doc14.png";

export default function HelpSection() {
  return (
    <section className="bg-background pb-10">
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-primary to-secondary shadow-lg">
          <div className="flex justify-center items-center gap-10 p-4 lg:p-6">
            
            <div>
              <h2 className="mb-2 text-center text-xl font-bold text-heading text-white">
                Need Help Choosing a Department?
              </h2>

              <p className="mb-4 text-center max-w-2xl leading-8 text-sm text-white">
                Our experienced healthcare team is here to guide you to the
                right specialist based on your symptoms and medical needs.
                We're committed to helping you receive the best possible care.
              </p>

              <div className="flex justify-center flex-wrap gap-4">
                <Link
                  href="/appointment"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 font-semibold text-primary text-sm"
                >
                  <CalendarDays size={20} className="text-primary" />

                  Book Appointment
                </Link>

                <Link
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 text-sm rounded-xl border border-white  px-4 py-2 font-semibold text-white "
                >
                  <Phone size={20} />

                  +91 98765 43210
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}