"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { Gallery } from "@/data/gallery";

interface Props {
  item: Gallery;
  onClick: () => void;
}

export default function GalleryCard({ item, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group relative block overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />

        {/* Eye */}

        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          <Eye size={24} className="text-primary" />
        </div>

        {/* Label */}

        <div className="absolute bottom-4 left-4">
          <span className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-heading shadow">
            {item.title}
          </span>
        </div>
      </div>
    </button>
  );
}
