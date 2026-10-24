"use client";

import {
  Ambulance,
  HeartPulse,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

export default function HeroVideo() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0  w-full object-cover"
      >
        <source src="/hospital_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay */}
      <div className="absolute " />

      {/* Content */}
      <div className="relative z-10 flex min-h-[180px] sm:min-h-[220px] md:min-h-[430px] lg:min-h-[620px] w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 md:px-4 md:py-2 px-3 py-1 backdrop-blur-md">
              <HeartPulse
                size={16}
                className="text-accent"
              />

              <span className="text-xs sm:text-sm font-medium text-white">
                Trusted Multi Speciality Hospital
              </span>
            </div>

            {/* Heading */}
            <h1 className=" mt-3 md:mt-6 font-heading font-semibold leading-tight tracking-tight text-white text-md sm:text-3xl md:text-4xl lg:text-6xl">
              Compassionate Care.
              <br />
              <span className="text-secondary">
                Advanced Treatment.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 lg:mt-6 max-w-xl leading-3 lg:leading-7 text-slate-200 text-xs sm:text-sm md:text-md lg:text-lg "
            >
              Providing world-class healthcare with experienced doctors,
              advanced medical technology, emergency services,
              diagnostics, surgery, and personalized patient care—
              all under one roof.
            </p>

            {/* Buttons */}
            <div className="mt-8 lg:flex lg:flex-row gap-4 hidden">
              <button className="rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary-hover">
                Book Appointment
              </button>

              <button className="rounded-xl border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-heading">
                Emergency Call
              </button>
            </div>

            {/* Feature Cards */}
            <div className="mt-10 lg:grid hidden gap-4 lg:grid-cols-3">
              <FeatureCard
                icon={<Ambulance size={22} />}
                title="24×7 Emergency"
              />

              <FeatureCard
                icon={<ShieldCheck size={22} />}
                title="Advanced ICU"
              />

              <FeatureCard
                icon={<HeartPulse size={22} />}
                title="Expert Doctors"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ChevronDown
          size={28}
          className="text-white"
        />
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

function FeatureCard({
  icon,
  title,
}: FeatureCardProps) {
  return (
    <div className=" group rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white hover:shadow-2xl ">
      <div className=" mb-4 inline-flex rounded-lg bg-primary/20 p-2.5 text-secondary transition-all group-hover:bg-primary group-hover:text-white">
        {icon}
      </div>

      <h3 className="text-base font-medium text-white group-hover:text-heading">
        {title}
      </h3>
    </div>
  );
}