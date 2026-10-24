"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  ArrowRight,
  Ambulance,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

import hospitalImage from "@/assets/home/hospital_img.webp";

const contactInfo = [
  {
    icon: Phone,
    title: "Emergency",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "info@mthospital.com",
    href: "mailto:info@mthospital.com",
  },
  {
    icon: MapPin,
    title: "Hospital Address",
    value: "Rajendra Nagar Chowk, Bilaspur, Chhattisgarh",
    href: "/contact",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat : 09:00 AM - 08:00 PM",
    href: "#",
  },
];

const features = [
  {
    icon: Ambulance,
    title: "24×7 Emergency",
  },
  {
    icon: HeartPulse,
    title: "Expert Doctors",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Care",
  },
];

export default function GetInTouch() {
  return (
    <section className="relative overflow-hidden bg-section-light py-10">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-8 text-center">
          <span className="text-primary text-base font-semibold uppercase tracking-[3px]">
            GET IN TOUCH
          </span>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>

            <span className="ml-1 h-[5px] w-14 rounded-full bg-primary"></span>
          </div>

          <h2 className="mt-5 font-heading text-2xl font-bold text-heading lg:text-5xl">
            We're Always Ready To Help You
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-text-light">
            Reach out to our healthcare experts for appointments, emergency
            services, health consultations or any medical assistance.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid gap-10 lg:grid-cols-[430px_1fr]">
          {/* Left Side */}

          <div>
            {/* Hospital Image */}

            <div className="overflow-hidden rounded-[28px] shadow-lg">
              <Image
                src={hospitalImage}
                alt="Hospital"
                className="h-[260px] w-full object-cover"
                priority
              />
            </div>

            {/* Contact Card */}

            <div className="mt-5 rounded-[28px] bg-white p-5 shadow-lg">
              <h3 className="text-2xl font-semibold text-heading">
                Contact Information
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-light">
                We are available 24×7 for emergency medical care and
                appointments.
              </p>

              <div className="mt-8 space-y-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition group-hover:bg-primary group-hover:text-white">
                        <Icon size={20} />
                      </div>

                      <div>
                        <h4 className="text-base font-semibold text-heading">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-text-light">
                          {item.value}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            
          </div>
       

        {/* Right Side */}

        <div className="rounded-[30px] bg-white p-8 shadow-lg">
          <h3 className="md:text-3xl text-2xl font-semibold text-heading">
            Book An Appointment
          </h3>

          <p className="mt-3 text-sm leading-7 text-text-light">
            Fill out the form below and our healthcare team will contact you as
            soon as possible.
          </p>

          <form className="mt-8">
            <div className="grid gap-5 md:grid-cols-2">
              {/* Name */}

              <div>
                <label className="mb-2 block text-sm font-medium text-heading">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </div>

              {/* Phone */}

              <div>
                <label className="mb-2 block text-sm font-medium text-heading">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </div>

              {/* Email */}

              <div>
                <label className="mb-2 block text-sm font-medium text-heading">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                />
              </div>

              {/* Department */}

              <div>
                <label className="mb-2 block text-sm font-medium text-heading">
                  Department
                </label>

                <select className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary">
                  <option>Select Department</option>

                  <option>Cardiology</option>

                  <option>Orthopedics</option>

                  <option>Neurology</option>

                  <option>Pediatrics</option>

                  <option>Gynecology</option>

                  <option>General Surgery</option>

                  <option>Emergency Care</option>
                </select>
              </div>
            </div>

            {/* Subject */}

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-heading">
                Subject
              </label>

              <input
                type="text"
                placeholder="Appointment / Health Query"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              />
            </div>

            {/* Message */}

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-heading">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              />
            </div>

            {/* Submit */}

            <div className="mt-8">
              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-xl bg-primary md:px-8 md:py-4 px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"
              >
                Send Message
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
         </div>

        {/* Bottom CTA */}

        <div className="mt-10 rounded-3xl border border-border bg-blue-50 p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left */}

            <div>
              <h3 className="text-2xl font-semibold text-heading">
                Need Immediate Medical Assistance?
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-text-light">
                Our emergency team is available 24 hours a day to provide
                immediate medical care. Call us or visit our hospital anytime.
              </p>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
              >
                <Phone size={18} />
                Call Emergency
              </a>

              <Link
                href="/contact"
                className="bg-white inline-flex items-center gap-2 rounded-xl border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Get Directions
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
}
