"use client";

import {
  Target,
  Eye,
} from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-10 bg-secondary-light">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <h3 className="text-center font-semibold uppercase tracking-[3px] text-primary mb-5">Our Mission & Vision</h3>

        <div className="grid overflow-hidden rounded-[30px] border border-border bg-card shadow-sm lg:grid-cols-2">

          {/* Mission */}

          <div className="flex flex-col gap-6 border-b border-border p-8 lg:border-b-0 lg:border-r lg:p-10">

            <div className="flex gap-3 justify-center items-center rounded-full ">
              <Target
                size={34}
                className="text-primary h-12 w-12 "
              />
              <h3 className="text-3xl font-bold text-heading">
                Our Mission
              </h3>
            </div>

            <div className="h-0.5 bg-primary-hover"/>

            <div>
              <p className="mt-4 leading-8 text-text">
                To provide world-class, evidence-based
                healthcare with compassion, integrity and
                innovation while ensuring the highest standards
                of patient safety, quality treatment and
                affordable medical services.
              </p>

            </div>

          </div>

          {/* Vision */}

          <div className="flex flex-col gap-6 p-8 lg:p-10">

            <div className="flex gap-3 items-center justify-center rounded-full ">
              <Eye
                size={34}
                className="text-secondary h-12 w-12 "
              />
              <h3 className="text-3xl font-bold text-heading">
                Our Vision
              </h3>
            </div>

            <div className="h-0.5 bg-secondary"/>


            <div>


              <p className="mt-4 leading-8 text-text">
                To become a trusted multispeciality healthcare
                destination recognized for clinical excellence,
                patient satisfaction, continuous innovation,
                ethical practice and community wellbeing.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}