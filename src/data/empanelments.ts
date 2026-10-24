import { StaticImageData } from "next/image";

import starHealth from "@/assets/empanelments/star_health.png";
import nivaBupa from "@/assets/empanelments/niva_bupa.png";
import iciciLombard from "@/assets/empanelments/icici-lombard.png";
import hdfcErgo from "@/assets/empanelments/hdfc-ergo.png";
import careHealth from "@/assets/empanelments/care_health.png";
import mediAssist from "@/assets/empanelments/medi-assist.png";
import mdIndia from "@/assets/empanelments/md_india.png";
import ayushman from "@/assets/empanelments/ayushman.png";

export interface Empanelment {
  id: number;
  name: string;
  logo: StaticImageData;
}

export const empanelments: Empanelment[] = [
  {
    id: 1,
    name: "Star Health Insurance",
    logo: starHealth,
  },
  {
    id: 2,
    name: "Niva Bupa",
    logo: nivaBupa,

  },
  {
    id: 3,
    name: "ICICI Lombard",
    logo: iciciLombard,
  },
  {
    id: 4,
    name: "HDFC ERGO",
    logo: hdfcErgo,
  },
  {
    id: 5,
    name: "Care Health Insurance",
    logo: careHealth,
  },
  {
    id: 8,
    name: "Medi Assist",
    logo: mediAssist,
  },
  {
    id: 9,
    name: "MD India",
    logo: mdIndia,

  },
  {
    id: 12,
    name: "Ayushman Bharat (PM-JAY)",
    logo: ayushman,
  },
];