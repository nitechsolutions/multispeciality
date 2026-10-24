"use client";

import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({
  icon: Icon,
  title,
  description,
}: Props) {
  return (
    <article className="text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-light">
        <Icon
          size={36}
          className="text-primary"
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