"use client";

import Image from "next/image";
import Link from "next/link";
import hospitalImg from "@/assets/home/hospital_img.webp";

import {
  ArrowRight,
  CircleCheckBig,
  Building2,
  Users,
  BedDouble,
  Award,
} from "lucide-react";
import CountUp from "../common/CountUp";

const features = [
  "24×7 Emergency & Trauma Care",
  "Experienced Specialist Doctors",
  "Advanced Diagnostic Laboratory",
  "Modern Operation Theatres",
  "Digital Radiology & Pharmacy",
  "Patient-Centered Healthcare",
];

const stats = [
  {
    icon: Building2,
    value: 15,
    label: "Departments",
  },
  {
    icon: Users,
    value: 50,
    label: "Doctors",
  },
  {
    icon: BedDouble,
    value: 100,
    label: "Hospital Beds",
  },
  {
    icon: Award,
    value: 20,
    label: "Years Experience",
  },
];

export default function AboutHospital() {
  return (
    <section className="bg-section-light left-bg py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 flex flex-col items-center">
          <span className="text-primary text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-[4px]">
            About Us
          </span>

          <div className="mt-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>

            <span className="ml-1 h-1 w-14 rounded-full bg-primary"></span>
          </div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold py-5 ">Welcome to DK Hospital</h2>


            <p className="text-base sm:leading-8  sm:text-lg">
              <span className="text-blue-500 font-semibold">Best Multitspecialist hospital in Bilaspur, </span>
              We are committed to providing exceptional healthcare services
              through experienced doctors, advanced medical technology, and
              patient-focused treatment. Our mission is to improve lives by
              delivering quality, affordable, and compassionate care for every
              patient.
            </p>

            <p className="mt-5 text-sm leading-7 text-text-light sm:text-base">
              From emergency care and advanced surgeries to diagnostics and
              preventive healthcare, our multidisciplinary team works together
              to ensure the best possible outcomes for every patient.
            </p>

            {/* Features */}

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CircleCheckBig
                    size={20}
                    className="mt-1 shrink-0 text-accent"
                  />

                  <span className="text-sm font-medium leading-6 text-text sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}

            <div className="mt-8">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-primary transition hover:bg-primary-hover sm:px-7"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right */}

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="overflow-hidden rounded-3xl lg:rounded-[40px] shadow-xl">
              <Image
                src={hospitalImg}
                height={800}
                width={700}
                alt="Hospital"
                priority
                className="h-[320px] w-full object-cover sm:h-[420px] md:h-[520px] lg:h-[600px]"
              />
            </div>

            {/* Floating Card */}

            <div className="relative mx-auto -mt-14 w-[92%] rounded-2xl bg-white p-5 shadow-xl sm:absolute sm:-bottom-8 sm:left-1/2 sm:mt-0 sm:w-[90%] sm:-translate-x-1/2">
              <div className="grid grid-cols-2 gap-5">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div className="rounded-xl bg-primary-light p-2 sm:p-3">
                        <Icon size={20} className="text-primary" />
                      </div>

                      <div>
                        <CountUp
                          from={0}
                          to={stat.value}
                          separator=","
                          direction="up"
                          duration={1}
                          className="count-up-text text-lg font-bold text-heading sm:text-2xl"
                          delay={0}
                        />
                        <span className="text-lg font-bold text-heading sm:text-2xl">
                          +
                        </span>

                        <p className="text-xs text-text-light sm:text-sm">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
