"use client";

import Script from "next/script";

export default function GoogleReviews() {
  return (
    <section className="bg-section-light py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="text-primary text-lg font-semibold uppercase tracking-[3px]">
            GOOGLE REVIEWS
          </span>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="ml-1 h-[5px] w-14 rounded-full bg-primary"></span>
          </div>

          <h2 className="mt-6 text-4xl font-bold text-heading lg:text-5xl">
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-light">
            Read genuine Google reviews from our patients and their families.
          </p>
        </div>

        {/* Elfsight Script */}
        <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        />

        {/* Widget */}
        <div
          className="elfsight-app-aff1eeed-ef4e-4c29-912d-38adad99c6b6"
          data-elfsight-app-lazy
        />
      </div>
    </section>
  );
}