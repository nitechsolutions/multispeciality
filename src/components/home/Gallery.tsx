"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

import img1 from "@/assets/gallery/g1.jpeg";
import img2 from "@/assets/gallery/g2.jpeg";
import img3 from "@/assets/gallery/g3.jpeg";
import img4 from "@/assets/gallery/g4.jpeg";
import img5 from "@/assets/gallery/g5.jpeg";
import img6 from "@/assets/gallery/g6.jpeg";

interface GalleryItem {
  id: number;
  image: StaticImageData;
}

const gallery: GalleryItem[] = [
  {
    id: 1,
    image: img1,
  },
  {
    id: 2,
    image: img2,
  },
  {
    id: 3,
    image: img3,
  },
  {
    id: 4,
    image: img4,
  },
  {
    id: 5,
    image: img5,
  },
  {
    id: 6,
    image: img6,
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const total = gallery.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset: number) => {
    return (current + offset + total) % total;
  };

  return (
    <section className="relative overflow-hidden bg-blue-50 py-15">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="text-primary text-lg font-semibold uppercase tracking-[3px]">
            OUR GALLERY
          </span>

          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary"></span>

            <span className="h-2 w-2 rounded-full bg-primary"></span>

            <span className="h-2 w-2 rounded-full bg-primary"></span>

            <span className="ml-1 h-[5px] w-14 rounded-full bg-primary"></span>
          </div>

          <h2 className="mt-5 font-heading text-xl font-semibold text-heading sm:text-3xl lg:text-4xl">
            A Glimpse Of Our Healthcare Facility
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-light">
            Explore our modern infrastructure, advanced technology,
            patient-friendly environment and world-class healthcare facilities.
          </p>
        </div>

        {/* Carousel */}

        <div className="relative mt-6 flex  items-center justify-center">
          {/* Left */}

          <button
            onClick={prevSlide}
            className="absolute left-0 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-primary hover:text-white"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Left Image */}

          <div className="absolute left-16 z-10 hidden h-[260px] w-[300px] overflow-hidden rounded-3xl opacity-70 shadow-xl transition-all duration-700 lg:block">
            <Image
              src={gallery[getIndex(-1)].image}
              sizes="300px"
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          {/* Center */}

          <div className="relative z-20 h-[400px] w-full max-w-xl overflow-hidden rounded-[32px] border-4 border-white shadow-2xl">
            <Image
              src={gallery[current].image}
               sizes="(max-width: 640px) 100vw, (max-width: 1280px) 80vw, 576px"
              alt="image"
              fill
              priority
              className="object-cover transition-all duration-700"
            />
          </div>

          {/* Right Image */}

          <div className="absolute right-16 z-10 hidden h-[260px] w-[300px] overflow-hidden rounded-3xl opacity-70 shadow-xl transition-all duration-700 lg:block">
            <Image
              src={gallery[getIndex(1)].image}
              alt="image"
              sizes="300px"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Button */}

          <button
            onClick={nextSlide}
            className="absolute right-0 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-primary hover:text-white"
          >
            <ChevronRight size={28} />
          </button>
          <div className="absolute bottom-3 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">
            {gallery.map((_, i) => (
              <div
                key={i}
                className={` transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "opacity-50"}`}
              ></div>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-8 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-3 font-semibold text-white shadow-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover"
          >
            View Full Gallery
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
