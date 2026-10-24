"use client";

import Link from "next/link";
import {
  Ambulance,
  Activity,
  ScanLine,
  Stethoscope,
  Syringe,
  Heart,
  Microscope,
  Bone,
  Baby,
  Ear,
  Eye,
  Home,
  Dumbbell,
  Brain,
  ShieldPlus,
  Droplets,
  ArrowRight,
  BadgePlus,
  Smile,
  FlaskConical,
  LucideIcon,
} from "lucide-react";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    id: 1,
    title: "Emergency Care",
    description: "24×7 emergency, trauma & ambulance services.",
    icon: Ambulance,
  },
  {
    id: 2,
    title: "Health Checkup",
    description: "Comprehensive preventive health packages.",
    icon: Activity,
  },
  {
    id: 3,
    title: "Medical Imaging",
    description: "MRI, CT Scan, X-Ray & Ultrasound.",
    icon: ScanLine,
  },
  {
    id: 4,
    title: "Internal Medicine",
    description: "Expert diagnosis and disease management.",
    icon: Stethoscope,
  },
  {
    id: 5,
    title: "General Surgery",
    description: "Advanced minimally invasive surgeries.",
    icon: Ambulance,
  },
  {
    id: 6,
    title: "Anesthesiology",
    description: "Safe anesthesia & pain management.",
    icon: Syringe,
  },
  {
    id: 7,
    title: "Cardiology",
    description: "Heart care, angiography & interventions.",
    icon: Heart,
  },
  {
    id: 8,
    title: "Endoscopy",
    description: "Modern GI diagnostic procedures.",
    icon: Microscope,
  },
  {
    id: 9,
    title: "Physical Therapy",
    description: "Rehabilitation and recovery programs.",
    icon: Dumbbell,
  },
  {
    id: 10,
    title: "Dialysis Center",
    description: "Advanced kidney dialysis treatment.",
    icon: Droplets,
  },
  {
    id: 11,
    title: "Neurosurgery",
    description: "Brain & spine surgical expertise.",
    icon: Brain,
  },
  {
    id: 12,
    title: "Pediatrics",
    description: "Complete child healthcare services.",
    icon: Baby,
  },
  {
    id: 13,
    title: "ENT",
    description: "Ear, Nose & Throat treatments.",
    icon: Ear,
  },
  {
    id: 14,
    title: "Gynecology",
    description: "Women's health & maternity care.",
    icon: BadgePlus,
  },
  {
    id: 15,
    title: "Eye Care",
    description: "Cataract & advanced eye surgeries.",
    icon: Eye,
  },
  {
    id: 16,
    title: "Home Care",
    description: "Professional care at your doorstep.",
    icon: Home,
  },
  {
    id: 17,
    title: "Orthopedics",
    description: "Joint replacement & bone care.",
    icon: Bone,
  },
  {
    id: 18,
    title: "Dermatology",
    description: "Skin, hair & laser treatments.",
    icon: Smile,
  },
  {
    id: 19,
    title: "Blood Bank",
    description: "Safe blood storage & transfusion.",
    icon: FlaskConical,
  },
  {
    id: 20,
    title: "ICU & Critical Care",
    description: "24×7 intensive care support.",
    icon: ShieldPlus,
  },
];

const featuredServices = services.slice(0, 6);

export default function Services() {
  return (
    <section className="bg-section-light  py-14 sm:py-16 lg:py-20">
         <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Left Blur */}
        <div className="absolute -left-32 top-10 h-56 w-56 rounded-full bg-primary/5 blur-3xl sm:h-72 sm:w-72 lg:h-[420px] lg:w-[420px]" />

        {/* Right Blur */}
        <div className="absolute -right-20 top-0 h-56 w-56 rounded-full bg-secondary/5 blur-3xl sm:h-72 sm:w-72 lg:h-[420px] lg:w-[420px]" />

        {/* Bottom Blur */}
        <div className="absolute bottom-10 left-1/3 hidden h-64 w-64 rounded-full bg-accent/5 blur-3xl lg:block" />

       

        {/* Decorative Dots */}
        <div className="absolute left-6 top-12 hidden opacity-30 md:block lg:left-14 lg:top-20">
          <div className="grid grid-cols-5 gap-3">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-primary"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        

        {/* Heading */}

        <div className="mx-auto mb-10 max-w-3xl text-center">

          <div className="flex flex-col items-center">

            <span className="text-primary text-sm sm:text-base lg:text-lg font-semibold uppercase tracking-[4px]">
              Our Services
            </span>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              <span className="h-2 w-2 rounded-full bg-primary"></span>

              <span className="ml-1 h-1 w-14 rounded-full bg-primary"></span>
            </div>
          </div>

          <h2 className="mt-5 font-heading text-xl font-semibold text-heading sm:text-3xl lg:text-4xl">
            Comprehensive Healthcare
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-light sm:text-base lg:text-lg">
            We provide complete medical care with experienced specialists,
            advanced technology, modern operation theatres and
            patient-focused treatment under one roof.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="group flex overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-lg"
            >
              {/* Number */}

              <div className="flex w-20 sm:w-24 lg:w-28 items-center justify-center border-r border-border bg-section-alt">

                <span className="text-4xl font-bold text-slate-200 sm:text-5xl lg:text-6xl">
                  {String(service.id).padStart(2, "0")}
                </span>

              </div>

              {/* Content */}

              <div className="flex-1 p-5 sm:p-6">

                <h3 className="text-lg font-semibold text-heading">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text-light">
                  {service.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Button */}

        <div className="mt-10 flex justify-center">

          <Link
            href="/services"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover sm:px-8"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>
      </div>
    </section>
  );
}