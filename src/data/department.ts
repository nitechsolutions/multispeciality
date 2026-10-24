// src/components/departments/departmentData.ts
import cardiologyImage from "@/assets/departments/cardiology.jpg";
import neurologyImage from "@/assets/departments/neurology.jpg";
import orthopedicsImage from "@/assets/departments/orthopedics.png";
import pediatricsImage from "@/assets/departments/pediatrics.jpg";

import {
  HeartPulse,
  Brain,
  Baby,
  Bone,
  Eye,
  Ear,
  Activity,
  Stethoscope,
  Microscope,
  ScanHeart,
  Droplets,
  Syringe,
  Hospital,
  Pill,
  ScanLine,
  PersonStanding,
  Dumbbell,
  ShieldPlus,
  Ambulance,
  LucideIcon,
} from "lucide-react";

export interface Department {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
  image: any;
}

export const departments: Department[] = [
  {
    id: 1,
    name: "Cardiology",
    slug: "cardiology",
    description:
      "Comprehensive diagnosis and treatment for heart and cardiovascular diseases.",
    icon: HeartPulse,
    image: cardiologyImage,
  },
  {
    id: 2,
    name: "Neurology",
    slug: "neurology",
    description:
      "Advanced care for brain, spine, nerves, stroke and neurological disorders.",
    icon: Brain,
    image: neurologyImage,
  },
  {
    id: 3,
    name: "Orthopedics",
    slug: "orthopedics",
    description:
      "Expert treatment for bones, joints, fractures, arthritis and sports injuries.",
    icon: Bone,
    image: orthopedicsImage,
  },
  {
    id: 4,
    name: "Pediatrics",
    slug: "pediatrics",
    description:
      "Complete healthcare services for newborns, children and adolescents.",
    icon: Baby,
    image: pediatricsImage,
  },
  {
    id: 5,
    name: "General Medicine",
    slug: "general-medicine",
    description:
      "Diagnosis and treatment of acute and chronic medical conditions.",
    icon: Stethoscope,
    image: "/departments/general-medicine.webp",
  },
  {
    id: 6,
    name: "General Surgery",
    slug: "general-surgery",
    description:
      "Safe and advanced surgical procedures with modern operation theatres.",
    icon: Hospital,
    image: "/departments/general-surgery.webp",
  },
  {
    id: 7,
    name: "ENT",
    slug: "ent",
    description:
      "Specialized treatment for ear, nose, throat, allergy and sinus disorders.",
    icon: Ear,
    image: "/departments/ent.webp",
  },
  {
    id: 8,
    name: "Ophthalmology",
    slug: "ophthalmology",
    description:
      "Comprehensive eye care including cataract, glaucoma and retina treatment.",
    icon: Eye,
    image: "/departments/ophthalmology.webp",
  },
  {
    id: 9,
    name: "Nephrology",
    slug: "nephrology",
    description:
      "Diagnosis and treatment of kidney diseases and dialysis services.",
    icon: Droplets,
    image: "/departments/nephrology.webp",
  },
  {
    id: 10,
    name: "Pulmonology",
    slug: "pulmonology",
    description:
      "Advanced respiratory care for asthma, COPD and lung infections.",
    icon: Activity,
    image: "/departments/pulmonology.webp",
  },
  {
    id: 11,
    name: "Dermatology",
    slug: "dermatology",
    description:
      "Treatment for skin, hair and nail disorders using modern techniques.",
    icon: ShieldPlus,
    image: "/departments/dermatology.webp",
  },
  {
    id: 12,
    name: "Radiology",
    slug: "radiology",
    description:
      "Digital X-Ray, CT Scan, MRI, Ultrasound and advanced diagnostic imaging.",
    icon: ScanLine,
    image: "/departments/radiology.webp",
  },
  {
    id: 13,
    name: "Pathology",
    slug: "pathology",
    description:
      "Accurate laboratory testing and diagnostic pathology services.",
    icon: Microscope,
    image: "/departments/pathology.webp",
  },
  {
    id: 14,
    name: "Physiotherapy",
    slug: "physiotherapy",
    description:
      "Rehabilitation programs for pain relief and improved mobility.",
    icon: PersonStanding,
    image: "/departments/physiotherapy.webp",
  },
  {
    id: 15,
    name: "Gynecology & Obstetrics",
    slug: "gynecology-obstetrics",
    description:
      "Comprehensive women's healthcare, pregnancy and maternity services.",
    icon: HeartPulse,
    image: "/departments/gynecology.webp",
  },
  {
    id: 16,
    name: "Emergency & Trauma",
    slug: "emergency-trauma",
    description:
      "24×7 emergency services with rapid response and trauma care.",
    icon: Ambulance,
    image: "/departments/emergency.webp",
  },
  {
    id: 17,
    name: "Urology",
    slug: "urology",
    description:
      "Diagnosis and treatment for urinary tract and male reproductive disorders.",
    icon: Pill,
    image: "/departments/urology.webp",
  },
  {
    id: 18,
    name: "Gastroenterology",
    slug: "gastroenterology",
    description:
      "Specialized care for digestive system, liver and gastrointestinal diseases.",
    icon: ScanHeart,
    image: "/departments/gastroenterology.webp",
  },
  {
    id: 19,
    name: "Anesthesiology",
    slug: "anesthesiology",
    description:
      "Safe anesthesia management and pain medicine for surgical procedures.",
    icon: Syringe,
    image: "/departments/anesthesiology.webp",
  },
  {
    id: 20,
    name: "Sports Medicine",
    slug: "sports-medicine",
    description:
      "Recovery, rehabilitation and injury prevention for athletes and active lifestyles.",
    icon: Dumbbell,
    image: "/departments/sports-medicine.webp",
  },
];