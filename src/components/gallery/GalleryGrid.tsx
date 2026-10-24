"use client";

import Image from "next/image";
import { useState } from "react";

import GalleryCard from "./GalleryCard";
import { gallery, Gallery } from "@/data/gallery";



export default function GalleryGrid() {
  const [visible, setVisible] = useState(12);

  const [selected, setSelected] =
    useState<Gallery | null>(null);

  const visibleItems = gallery.slice(0, visible);

  return (
    <section className="py-15">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}

        <div className="text-center">


          <h2 className="mt-3 text-2xl font-bold text-heading md:text-4xl">
            Explore Our Hospital
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-secondary" />


          <p className="mx-auto mt-4 max-w-3xl text-text-light">
            Take a glimpse of our infrastructure,
            departments, advanced medical facilities,
            patient care services and hospital events.
          </p>
        </div>

        {/* Gallery Grid */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelected(item)}
            />
          ))}
        </div>

        {/* Load More */}

        {visible < gallery.length && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setVisible((prev) => prev + 6)}
              className="rounded-xl border border-primary px-8 py-4 font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              Load More
            </button>
          </div>
        )}

        {/* Image Preview */}

        {selected && (
          <div
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5"
          >
            <div className="relative h-[80vh] w-full max-w-6xl">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="rounded-2xl object-contain"
              />

              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 sm:right-50 md:right-50 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-heading shadow"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}