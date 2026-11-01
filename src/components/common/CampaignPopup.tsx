
"use client";

import {  useState } from "react";
import Image from "next/image";
import { X, } from "lucide-react";
import { useAppointment } from "./appointment/AppointmentProvider";

export default function CampaignPopup() {
  const [isOpen, setIsOpen] = useState(true);  
  const { openAppointment } = useAppointment();

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[50] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closePopup();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="campaign-title"
        className="relative w-full max-w-[300px] overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-300"
      >
        {/* Close Button */}
        <button
          onClick={closePopup}
          aria-label="Close campaign popup"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-red-50 hover:text-red-500"
        >
          <X size={22} />
        </button>

        <div className="flex flex-col ">

          {/* Campaign Poster */}
          <div className="relative min-h-[400px] md:min-h-[430px]">
            <Image
              src="/camp.png"
              alt="Hospital health checkup campaign"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Campaign Details */}
          <div className=" text-center bg-primary text-white py-2 font-semibold">
            <button onClick={openAppointment}> Book an Appointment</button>
          </div>
       
        </div>
      </div>
    </div>
  );
}
