"use client";

// import Script from "next/script";

import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Anajan Miri",
      date: "2025-08-02",
      review:
        "Satya Clinic has advanced facilities and is very well maintained. The doctor explains treatment clearly and the staff is cooperative.",
      avatar: "A",
      color: "bg-orange-600",
    },
    {
      name: "Suraj Sahu",
      date: "2025-08-01",
      review:
        "Treatment is very good and affordable. Dr. Sahu listens carefully and provides proper guidance. Staff behaviour and cleanliness are also excellent.",
      avatar: "S",
      color: "bg-cyan-600",
    },
    {
      name: "Nikhil Kashyap",
      date: "2025-07-26",
      review:
        "Very good clinic with clean environment and supportive staff. My family received proper treatment and we are fully satisfied.",
      avatar: "N",
      color: "bg-pink-600",
    },
  ];

  return (
    <section className="bg-section-light py-15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-primary sm:text-base lg:text-lg">
            GOOGLE REVIEWS
          </span>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="h-2 w-2 rounded-full bg-primary"></span>
            <span className="ml-1 h-[5px] w-14 rounded-full bg-primary"></span>
          </div>

          <h2 className="mt-6 text-3xl font-bold text-heading sm:text-4xl lg:text-5xl">
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-light">
            Read genuine Google reviews from our patients and their families.
          </p>
        </div>
        {/* Elfsight Script */}
        {/* <Script
          src="https://elfsightcdn.com/platform.js"
          strategy="lazyOnload"
        /> */}
        {/* Widget */}
        {/* <div
          className="elfsight-app-aff1eeed-ef4e-4c29-912d-38adad99c6b6"
          data-elfsight-app-lazy
        /> */}
        {/* REVIEWS */}
        <div className="relative mt-8">
          {/* Left Arrow */}
          <button className="absolute -left-5 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-lg transition hover:bg-[#1a6b4a] hover:text-white lg:flex">
            <ChevronLeft />
          </button>

          {/* Right Arrow */}
          <button className="absolute -right-5 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-lg transition hover:bg-[#1a6b4a] hover:text-white lg:flex">
            <ChevronRight />
          </button>

          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {reviews.map((item, index) => (
              <div
                key={item.name}
                className="rounded bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    {/* Avatar */}
                    <div
                      className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full text-xl sm:text-2xl font-bold text-white ${item.color}`}
                    >
                      {item.avatar}
                    </div>

                    {/* Info */}
                    <div>
                      <h3 className="text-lg sm:text-lg font-semibold text-black">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-base text-gray-500">
                        {item.date}
                      </p>
                    </div>
                  </div>

                  {/* Google Icon */}
                  <Image
                    src="./google-logo-svg.svg"
                    alt="Google"
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </div>

                {/* Stars */}
                <div className="mt-4 flex items-center gap-1 text-[#f4b400]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-lg color=" />
                  ))}
                </div>

                {/* Review */}
                <p className="mt-4 sm:leading-9 text-[#222] sm:text-lg leading-6">{item.review}</p>                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
