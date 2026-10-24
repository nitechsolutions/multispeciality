import AboutHero from '@/components/about/AboutHero'
import CoreValues from '@/components/about/CoreValues'
import MissionVision from '@/components/about/MissionVision'
import WhoWeAre from '@/components/about/WhoWeAre'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import React from 'react'

export const metadata = {
  title: "About Us | MT Hospital",
  description:
    "Learn more about MT Hospital, our mission, vision, experienced doctors, advanced healthcare facilities, and commitment to compassionate patient care.",
};

export default function AboutPage() {
  return (
    <div>
        <AboutHero/>
        <WhoWeAre />
        <MissionVision/>
        <WhyChooseUs />
        <CoreValues />
    </div>
  )
}
