"use client";

import Image from "next/image";

import {
  Cpu,
  Stethoscope,
  HeartHandshake,
} from "lucide-react";

import hospitalImage from "@/assets/home/hospital_img.webp";

const features = [
  {
    icon: Cpu,
    title: "Advanced Technology",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
  },
];

export default function WhoWeAre() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">

        {/* Image */}

        <div className="relative overflow-hidden rounded-[30px]">
          <Image
            src={hospitalImage}
            alt="Hospital Reception"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}

        <div>

          <span className="font-semibold uppercase tracking-[3px] text-primary">
            Who We Are
          </span>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-heading">
            Delivering Excellence
            <br />
            in Healthcare
          </h2>

          <p className="mt-6 leading-8 text-text">
            Established with a vision to redefine healthcare,
            MT Hospital brings together advanced medical
            technology, experienced healthcare professionals,
            and patient-centric services under one roof.
          </p>

          <p className="mt-5 leading-8 text-text">
            From preventive healthcare to advanced surgeries,
            our commitment is to provide safe, ethical,
            compassionate and affordable treatment for every
            individual who walks through our doors.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">

            {features.map((item) => (
              <div
                key={item.title}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
                  <item.icon
                    size={30}
                    className="text-primary"
                  />
                </div>

                <p className="mt-4 font-semibold text-heading">
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