"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { navLinks } from "./NavLinks";
import { Phone, Mail, MapPin, Clock3, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [appointmentPopup, setAppointmentPopup] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    service: "OPD Consultation",
    date: "",
    time: "Morning (9AM – 2PM)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "917999999999";

    const text = `
*New Appointment Request*

👤 Name: ${form.name}
📱 Phone: ${form.phone}
🎂 Age: ${form.age}
🏥 Service: ${form.service}
📅 Date: ${form.date}
⏰ Time: ${form.time}

💬 Message:
${form.message}
    `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(url, "_blank");

    setAppointmentPopup(false);
  };

  return (
    <>
      {/* Top Bar */}

      <div className="hidden bg-gradient-to-r from-primary via-primary to-secondary text-white shadow-sm lg:block">
        <div className="container mx-auto flex h-7 items-center justify-between text-xs font-medium">
          <p>
            Mon–Sat: 10:00am–2:00pm | 5:00pm–8:30pm | 24×7 Emergency Services
          </p>

          <div className="flex gap-8">
            <span>📞 +91 9876543210</span>
            <span>✉ info@mthospital.com</span>
          </div>
        </div>
      </div>

      {/* Navbar */}

      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(15,108,189,0.08)]">
        <div className="container mx-auto flex h-[80px] items-center justify-between px-5">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary text-2xl font-bold text-white shadow-lg shadow-primary/20">
              MT
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight text-heading">
                MT Hospital
              </h2>

              <p className="text-sm font-medium text-text-light">
                Multi Speciality Hospital
              </p>
            </div>
          </Link>

          {/* Desktop */}

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => (
              <div key={item.title} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 font-medium transition
                  ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right */}

          <div className="hidden items-center gap-4 lg:flex">
            {/* <a
              href="tel:+919876543210"
              className="flex items-center rounded gap-2 font-semibold text-white bg-green-500"
            >
              <Phone size={18} />
              Call Now
            </a> */}

            <button
               onClick={() =>
                setAppointmentPopup(true)
              }
              className="rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary/90"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile */}

          <button onClick={() => setOpen(!open)} className="lg:hidden mr-4">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <MobileMenu open={open} />
      </header>

      {appointmentPopup && (
        <>
          {/* BACKDROP */}
          <div
            onClick={() => setAppointmentPopup(false)}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
          />

          {/* POPUP */}
          <div className="fixed left-1/2 top-1/2 z-[101] w-[95%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[30px] bg-white shadow-2xl">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setAppointmentPopup(false)}
              className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f5f3] text-gray-700 transition hover:bg-[#e7f0eb]"
            >
              <X size={24} />
            </button>

            <div className="grid lg:grid-cols-2">
              {/* LEFT SIDE */}
              <div className="hidden lg:block bg-primary p-8 text-white lg:p-10">
                {/* Badge */}
                <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
                  <span className="text-xs font-medium uppercase tracking-wide">
                    Appointment
                  </span>
                </div>

                {/* Heading */}
                <h2 className="mt-5 font-heading text-3xl font-bold leading-tight">
                  Book Your Appointment
                </h2>

                {/* Description */}
                <p className="mt-5 text-sm leading-7 text-white/75">
                  Schedule your consultation with our healthcare experts quickly
                  and easily through WhatsApp.
                </p>

                {/* INFO */}
                <div className="mt-10 space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <Phone size={24} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/60">
                        Phone
                      </p>

                      <h3 className="mt-1 text-base font-medium">
                        +91 79999 99999
                      </h3>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <MapPin size={24} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/60">
                        Address
                      </p>

                      <h3 className="mt-1 text-sm leading-7">
                        Satya Clinic, Main Road, Madhya Pradesh
                      </h3>
                    </div>
                  </div>

                  {/* Doctor */}
                  

                  {/* Timings */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                      <Clock3 size={24} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-white/60">
                        OPD Timings
                      </p>

                      <h3 className="mt-1 text-sm leading-7">
                        Mon–Sat: 9AM–2PM & 5PM–9PM
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="max-h-[90vh] overflow-y-auto bg-[#f8f9f7] p-8 lg:p-10"
              >
                {/* Title */}
                <h3 className="font-heading text-2xl font-bold text-[#124733]">
                  Request Appointment
                </h3>

                {/* GRID */}
                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Full Name
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="h-11 w-full rounded-xl border border-[#d5ddd8] bg-white px-4 text-sm outline-none focus:border-[#1a6b4a]"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="h-11 w-full rounded-xl border border-[#d5ddd8] bg-white px-4 text-sm outline-none focus:border-[#1a6b4a]"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Age
                    </label>

                    <input
                      type="number"
                      placeholder="Age"
                      className="h-11 w-full rounded-xl border border-[#d5ddd8] bg-white px-4 text-sm outline-none focus:border-[#1a6b4a]"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          age: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Service
                    </label>

                    <select
                      className="h-11 w-full rounded-xl border border-[#d5ddd8] bg-white px-4 text-sm outline-none focus:border-[#1a6b4a]"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          service: e.target.value,
                        })
                      }
                    >
                      <option>OPD Consultation</option>
                      <option>Pathology Test</option>
                      <option>Health Checkup</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Preferred Date
                    </label>

                    <input
                      type="date"
                      className="h-11 w-full rounded-xl border border-[#d5ddd8] bg-white px-4 text-sm outline-none focus:border-[#1a6b4a]"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          date: e.target.value,
                        })
                      }
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                      Preferred Time
                    </label>

                    <select
                      className="h-11 w-full rounded-xl border border-[#d5ddd8] bg-white px-4 text-sm outline-none focus:border-[#1a6b4a]"
                      onChange={(e) =>
                        setForm({
                          ...form,
                          time: e.target.value,
                        })
                      }
                    >
                      <option>Morning (9AM – 2PM)</option>

                      <option>Evening (5PM – 9PM)</option>
                    </select>
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="mt-5">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-600">
                    Symptoms / Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Describe symptoms..."
                    className="w-full rounded-xl border border-[#d5ddd8] bg-white px-4 py-3 text-sm outline-none focus:border-[#1a6b4a]"
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-white transition hover:bg-primary cursor-pointer"
                >
                  Request Appointment →
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}
