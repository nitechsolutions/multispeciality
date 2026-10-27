"use client";

import Image from "next/image";
import Link from "next/link";

import { Phone, Mail, MapPin, Clock3, ArrowRight } from "lucide-react";

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
    value: "CIMS hospital, Gol Bazar, Bilaspur C.G.",
    href: "/contact",
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: "Mon - Sat : 09:00 AM - 08:00 PM",
    href: "#",
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

          <h2 className="mt-5 font-heading text-xl font-semibold text-heading sm:text-3xl lg:text-4xl">
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
             Send Us a Message
            </h3>

            <p className="mt-3 text-sm leading-7 text-text-light">
              Fill out the form below and our healthcare team will contact you
              as soon as possible.
            </p>

            <form className="mt-8">
             
                {/* Name */}

                <div className="mt-5">
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

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-heading">
                    Phone Number
                  </label>

                  <input
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />
                </div>

                {/* Email */}


                {/* Department */}

          

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

        <div className="w-full overflow-hidden border border-border shadow-lg mt-10">
          <iframe
            title="Hospital Location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.990402873424!2d82.15061917506281!3d22.088183479839742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b0da5367a43%3A0xa7568e35dc9fc578!2sCims%20Hospital%20Rd%2C%20Gond%20Para%2C%20Gol%20Bazar%2C%20Chhattisgarh%20495001!5e0!3m2!1sen!2sin!4v1792943585673!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
