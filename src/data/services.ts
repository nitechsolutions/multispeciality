import {
  Ambulance,
  Activity,
  ScanLine,
  Stethoscope,
  Syringe,
  Heart,
  Microscope,
  Bone,
  Baby,
  Ear,
  Eye,
  Home,
  Dumbbell,
  Brain,
  ShieldPlus,
  Droplets,
  ArrowRight,
  BadgePlus,
  Smile,
  FlaskConical,
  LucideIcon,
} from "lucide-react";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: 1,
    title: "Emergency Care",
    description: "24×7 emergency, trauma & ambulance services.",
    icon: Ambulance,
  },
  {
    id: 2,
    title: "Health Checkup",
    description: "Comprehensive preventive health packages.",
    icon: Activity,
  },
  {
    id: 3,
    title: "Medical Imaging",
    description: "MRI, CT Scan, X-Ray & Ultrasound.",
    icon: ScanLine,
  },
  {
    id: 4,
    title: "Internal Medicine",
    description: "Expert diagnosis and disease management.",
    icon: Stethoscope,
  },
  {
    id: 5,
    title: "General Surgery",
    description: "Advanced minimally invasive surgeries.",
    icon: Ambulance,
  },
  {
    id: 6,
    title: "Anesthesiology",
    description: "Safe anesthesia & pain management.",
    icon: Syringe,
  },
  {
    id: 7,
    title: "Cardiology",
    description: "Heart care, angiography & interventions.",
    icon: Heart,
  },
  {
    id: 8,
    title: "Endoscopy",
    description: "Modern GI diagnostic procedures.",
    icon: Microscope,
  },
  {
    id: 9,
    title: "Physical Therapy",
    description: "Rehabilitation and recovery programs.",
    icon: Dumbbell,
  },
  {
    id: 10,
    title: "Dialysis Center",
    description: "Advanced kidney dialysis treatment.",
    icon: Droplets,
  },
  {
    id: 11,
    title: "Neurosurgery",
    description: "Brain & spine surgical expertise.",
    icon: Brain,
  },
  {
    id: 12,
    title: "Pediatrics",
    description: "Complete child healthcare services.",
    icon: Baby,
  },
  {
    id: 13,
    title: "ENT",
    description: "Ear, Nose & Throat treatments.",
    icon: Ear,
  },
  {
    id: 14,
    title: "Gynecology",
    description: "Women's health & maternity care.",
    icon: BadgePlus,
  },
  {
    id: 15,
    title: "Eye Care",
    description: "Cataract & advanced eye surgeries.",
    icon: Eye,
  },
  {
    id: 16,
    title: "Home Care",
    description: "Professional care at your doorstep.",
    icon: Home,
  },
  {
    id: 17,
    title: "Orthopedics",
    description: "Joint replacement & bone care.",
    icon: Bone,
  },
  {
    id: 18,
    title: "Dermatology",
    description: "Skin, hair & laser treatments.",
    icon: Smile,
  },
  {
    id: 19,
    title: "Blood Bank",
    description: "Safe blood storage & transfusion.",
    icon: FlaskConical,
  },
  {
    id: 20,
    title: "ICU & Critical Care",
    description: "24×7 intensive care support.",
    icon: ShieldPlus,
  },
];
