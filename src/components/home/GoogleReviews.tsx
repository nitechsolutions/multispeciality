"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

type Review = {
  id: number;
  name: string;
  date: string;
  review: string;
  avatar: string;
  color: string;
  rating: number;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Anajan Miri",
    date: "2025-08-02",
    review:
      "Satya Clinic has advanced facilities and is very well maintained. The doctor explains treatment clearly and the staff is cooperative.",
    avatar: "A",
    color: "bg-orange-600",
    rating: 4,
  },
  {
    id: 2,
    name: "Suraj Sahu",
    date: "2025-08-01",
    review:
      "Treatment is very good and affordable. Dr. Sahu listens carefully and provides proper guidance. Staff behaviour and cleanliness are also excellent.",
    avatar: "S",
    color: "bg-cyan-600",
    rating: 3,
  },
  {
    id: 3,
    name: "Nikhil Kashyap",
    date: "2025-07-26",
    review:
      "Very good clinic with clean environment and supportive staff. My family received proper treatment and we are fully satisfied.",
    avatar: "N",
    color: "bg-pink-600",
    rating: 4,
  },
  {
    id: 4,
    name: "Priya Sharma",
    date: "2025-07-20",
    review:
      "The staff was helpful and the doctor explained the treatment process clearly. The clinic was clean and well maintained.",
    avatar: "P",
    color: "bg-purple-600",
    rating: 5,
  },
  {
    id: 5,
    name: "Rahul Verma",
    date: "2025-07-15",
    review:
      "A good healthcare experience with professional staff and clear guidance throughout the consultation.",
    avatar: "R",
    color: "bg-emerald-600",
    rating: 4,
  },
];

export default function GoogleReviews() {
  const [current, setCurrent] = useState(0);

  const total = reviews.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getIndex = (offset: number) => (current + offset + total) % total;

  

  return (
    <section className="overflow-hidden bg-section-alt py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-14">
          <span className="text-sm font-semibold uppercase tracking-[3px] text-primary sm:text-base">
            Google Reviews
          </span>

          <div className="mt-3 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="ml-1 h-[5px] w-14 rounded-full bg-primary" />
          </div>

          <h2 className="mt-5 font-heading text-xl font-semibold text-heading sm:text-3xl lg:text-4xl">
            What Our Patients Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-light sm:text-base">
            Read patient feedback about their experiences with our doctors,
            facilities, and healthcare services.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mx-auto max-w-6xl">
          {/* Previous button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-lg transition hover:bg-primary hover:text-white sm:-left-3 sm:h-12 sm:w-12 lg:-left-6"
          >
            <ChevronLeft size={23} />
          </button>

          {/* Previous review */}
          <div className="absolute left-0 top-1/2 hidden h-[260px] w-[29%] -translate-y-1/2 opacity-60 transition-all duration-500 lg:block">
            <ReviewCard item={reviews[getIndex(-1)]} />
          </div>

          {/* Center review */}
          <div className="relative z-20 mx-9 h-[260px] transition-all duration-500 sm:mx-12 lg:mx-auto lg:w-[54%]">
            <ReviewCard item={reviews[current]} featured />
          </div>

          {/* Next review */}
          <div className="absolute right-0 top-1/2 hidden h-[260px] w-[29%] -translate-y-1/2 opacity-60 transition-all duration-500 lg:block">
            <ReviewCard item={reviews[getIndex(1)]} />
          </div>

          {/* Next button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next review"
            className="absolute right-0 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-primary shadow-lg transition hover:bg-primary hover:text-white sm:-right-3 sm:h-12 sm:w-12 lg:-right-6"
          >
            <ChevronRight size={23} />
          </button>

          {/* Indicators */}
          <div className="mt-7 flex items-center justify-center gap-2">
            {reviews.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Show review ${index + 1}`}
                aria-current={current === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-primary/30 hover:bg-primary/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ReviewCard = ({
    item,
    featured = false,
  }: {
    item: Review;
    featured?: boolean;
  }) => (
    <div
      className={`h-full rounded-2xl border border-border bg-white p-5 sm:p-7 ${
        featured ? "shadow-xl" : "shadow-md"
      }`}
    >
      {/* Reviewer information */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white ${item.color}`}
          >
            {item.avatar}
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-heading sm:text-base">
              {item.name}
            </h3>

            <p className="mt-1 text-xs text-text-light">{item.date}</p>
          </div>
        </div>

        <Image
          src="/google-logo-svg.svg"
          alt="Google"
          width={24}
          height={24}
          className="h-6 w-6 shrink-0 object-contain"
        />
      </div>

      {/* Rating */}
      {/* Dynamic Rating */}
      <div
        className="mt-4 flex items-center gap-1"
        role="img"
        aria-label={`${item.rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <Star
            key={index}
            size={17}
            fill={index < item.rating ? "#f4b400" : "transparent"}
            stroke={index < item.rating ? "#f4b400" : "#cbd5e1"}
          />
        ))}
      </div>

      {/* Review text */}
      <p
        className={`mt-4 leading-7 text-text ${
          featured ? "text-sm sm:text-base" : "text-sm"
        }`}
      >
        {item.review}
      </p>
    </div>
  );
