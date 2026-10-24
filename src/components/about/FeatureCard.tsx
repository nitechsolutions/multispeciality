"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <article
      className="
        group
        rounded-3xl
        border
        border-border
        bg-card
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-lg
      "
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-light transition-all duration-300 group-hover:bg-primary">
        <Icon
          size={30}
          className="text-primary transition-all duration-300 group-hover:text-white"
        />
      </div>

      <h3 className="mt-6 text-xl font-semibold text-heading">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-text-light">
        {description}
      </p>
    </article>
  );
}