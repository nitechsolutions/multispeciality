import { StaticImageData } from "next/image";

import img1 from "@/assets/gallery/g1.jpeg";
import img2 from "@/assets/gallery/g2.jpeg";
import img3 from "@/assets/gallery/g3.jpeg";
import img4 from "@/assets/gallery/g4.jpeg";
import img5 from "@/assets/gallery/g5.jpeg";
import img6 from "@/assets/gallery/g6.jpeg";

export interface Gallery {
  id: number;
  title:string;
  image: StaticImageData;
}

export const gallery: Gallery[] =  [
  {
    id: 1,
    title: "Receiption",
    image: img1,
  },
  {
    id: 2,
    title: "OT",
    image: img2,
  },
  {
    id: 3,
    title: "General Ward",
    image: img3,
  },
  {
    id: 4,
    title: "Lab",
    image: img4,
  },
  {
    id: 5,
    title: "Receiption",
    image: img5,
  },
  {
    id: 6,
    title: "Receiption",
    image: img6,
  },
];