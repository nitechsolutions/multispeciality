"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  X,
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { useAppointment } from "./AppointmentProvider";

const WHATSAPP_NUMBER = "918889706313"; // Replace with your hospital's WhatsApp number.

const initialForm = {
  name: "",
  phone: "",
  age: "",
  service: "OPD Consultation",
  date: "",
  time: "Morning (9 AM – 2 PM)",
  message: "",
};

const inputClass =
  "h-11 w-full rounded-xl border border-border bg-white px-3.5 text-sm text-foreground outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-slate-600";

export default function AppointmentModal() {
  const { isOpen, closeAppointment } = useAppointment();
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeAppointment();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeAppointment]);

  if (!isOpen) return null;

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "*New Appointment Request*",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Age: ${form.age || "Not provided"}`,
      `Service: ${form.service}`,
      `Preferred date: ${form.date || "Not specified"}`,
      `Preferred time: ${form.time}`,
      `Message: ${form.message || "Not provided"}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setForm(initialForm);
    closeAppointment();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeAppointment();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-title"
        className="relative my-auto grid max-h-[94dvh] w-full max-w-5xl  rounded-2xl bg-white shadow-2xl sm:rounded-3xl lg:grid-cols-[0.8fr_1.2fr]"
      >
        <button
          
          onClick={closeAppointment}
          aria-label="Close appointment form"
          className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-slate-600 shadow-sm transition hover:bg-primary-light hover:text-primary sm:right-4 sm:top-4"
        >
          <X size={21} />
        </button>

        {/* Information panel */}
        <aside className="hidden flex-col bg-primary p-8 text-white lg:flex lg:p-9">
          <span className="w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Appointment booking
          </span>

          <h2
            id="appointment-title"
            className="mt-6 font-heading text-3xl font-bold leading-tight"
          >
            Your health deserves the right care.
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/80">
            Request an appointment with our healthcare team. Share your
            preferred date and service to get started.
          </p>

          <div className="mt-9 space-y-6">
            <div className="flex items-start gap-3">
              <span className="rounded-xl bg-white/10 p-3">
                <Phone size={20} />
              </span>
              <div>
                <p className="text-xs text-white/70">Call us</p>
                <p className="mt-1 text-sm font-semibold">+91 79999 99999</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="rounded-xl bg-white/10 p-3">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-xs text-white/70">Visit us</p>
                <p className="mt-1 text-sm leading-6">
                  CIMS hospital, Gol Bazar, Bilaspur C.G.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="rounded-xl bg-white/10 p-3">
                <Clock3 size={20} />
              </span>
              <div>
                <p className="text-xs text-white/70">OPD timings</p>
                <p className="mt-1 text-sm leading-6">
                  Mon–Sat: 9 AM–2 PM & 5 PM–9 PM
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2 border-t border-white/20 pt-6 text-xs text-white/80">
            <CheckCircle2 size={17} />
            Simple appointment requests via WhatsApp
          </div>
        </aside>

        {/* Appointment form */}
        <div className=" p-5 pt-16 sm:p-7  sm:pt-16 lg:p-9 bg-white">
          <div className="mb-6 h">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Book a consultation
            </span>

            <h3 className="mt-2 font-heading text-2xl font-bold text-heading sm:text-3xl">
              Request Appointment
            </h3>

            <p className="mt-2 text-sm leading-6 text-text-light">
              Fill in your details and continue to WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="appointment-name" className={labelClass}>
                  Full name *
                </label>
                <input
                  id="appointment-name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Enter your name"
                  className={inputClass}
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="appointment-phone" className={labelClass}>
                  Phone number *
                </label>
                <input
                  id="appointment-phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  maxLength={20}
                  pattern="[0-9+() -]{7,20}"
                  title="Enter a valid phone number"
                  placeholder="+91 XXXXX XXXXX"
                  className={inputClass}
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="appointment-age" className={labelClass}>
                  Age
                </label>
                <input
                  id="appointment-age"
                  type="number"
                  min={0}
                  max={120}
                  placeholder="Patient age"
                  className={inputClass}
                  value={form.age}
                  onChange={(e) => updateField("age", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="appointment-service" className={labelClass}>
                  Service *
                </label>
                <select
                  id="appointment-service"
                  required
                  className={inputClass}
                  value={form.service}
                  onChange={(e) => updateField("service", e.target.value)}
                >
                  <option>OPD Consultation</option>
                  <option>Emergency Consultation</option>
                  <option>Pathology Test</option>
                  <option>Medical Imaging</option>
                  <option>Health Checkup</option>
                  <option>General Surgery</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Neurology</option>
                  <option>Pediatrics</option>
                  <option>Gynecology</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="appointment-date" className={labelClass}>
                  Preferred date
                </label>
                <input
                  id="appointment-date"
                  type="date"
                  min={new Date().toLocaleDateString("en-CA")}
                  className={inputClass}
                  value={form.date}
                  onChange={(e) => updateField("date", e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="appointment-time" className={labelClass}>
                  Preferred time *
                </label>
                <select
                  id="appointment-time"
                  required
                  className={inputClass}
                  value={form.time}
                  onChange={(e) => updateField("time", e.target.value)}
                >
                  <option>Morning (9 AM – 2 PM)</option>
                  <option>Evening (5 PM – 9 PM)</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="appointment-message" className={labelClass}>
                Symptoms / message
              </label>
              <textarea
                id="appointment-message"
                rows={3}
                maxLength={1000}
                placeholder="Share any relevant details (optional)"
                className="w-full resize-y rounded-xl border border-border bg-white px-3.5 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20"
            >
              <MessageCircle size={18} />
              Continue to WhatsApp
            </button>

            <p className="mt-3 text-center text-xs leading-5 text-text-light">
              This sends a request through WhatsApp; it does not confirm an
              appointment automatically.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
