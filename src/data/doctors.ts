
import { StaticImageData } from "next/image";

import doctor1 from "@/assets/home/doc14.png";

export interface Doctor {
  id: number;
  name: string;
  image: StaticImageData;
  degree: string;
  speciality: string;
  experience: string;
  color: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    image: doctor1,
    degree: "MBBS, MD (Internal Medicine)",
    speciality: "Internal Medicine",
    experience: "12+ Years Experience",
    color: "bg-primary",
  },

  {
    id: 2,
    name: "Dr. Priya Patel",
    image: doctor1,
    degree: "MBBS, DGO",
    speciality: "Obstetrics & Gynecology",
    experience: "10+ Years Experience",
    color: "bg-secondary",
  },

  {
    id: 3,
    name: "Dr. Rajesh Verma",
    image: doctor1,
    degree: "MBBS, MS",
    speciality: "General Surgery",
    experience: "15+ Years Experience",
    color: "bg-accent",
  },

  {
    id: 4,
    name: "Dr. Neha Kapoor",
    image: doctor1,
    degree: "MBBS, MD (Pediatrics)",
    speciality: "Pediatrics",
    experience: "8+ Years Experience",
    color: "bg-violet-500",
  },

  {
    id: 5,
    name: "Dr. Vikram Singh",
    image: doctor1,
    degree: "MBBS, MCh",
    speciality: "Neurosurgery",
    experience: "18+ Years Experience",
    color: "bg-orange-500",
  },

  {
    id: 6,
    name: "Dr. Sneha Rao",
    image: doctor1,
    degree: "MBBS, MS",
    speciality: "Orthopedics",
    experience: "11+ Years Experience",
    color: "bg-pink-500",
  },

  {
    id: 7,
    name: "Dr. Anil Kumar",
    image: doctor1,
    degree: "MBBS, DOMS",
    speciality: "Ophthalmology",
    experience: "13+ Years Experience",
    color: "bg-cyan-500",
  },

  {
    id: 8,
    name: "Dr. Ritu Sharma",
    image: doctor1,
    degree: "MBBS, MS (ENT)",
    speciality: "ENT Specialist",
    experience: "9+ Years Experience",
    color: "bg-emerald-500",
  },
];
