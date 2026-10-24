import AppointmentCTA from '@/components/doctors/AppointmentCTA'
// import DoctorsFilter from '@/components/doctors/DoctorsFilter'
import DoctorsGrid from '@/components/doctors/DoctorsGrid'
import DoctorsHero from '@/components/doctors/DoctorsHero'
import DoctorsStats from '@/components/doctors/DoctorsStats'
import React from 'react'

export default function doctors() {
  return (
    <div>
        <DoctorsHero />
<DoctorsStats />
{/* <DoctorsFilter /> */}
<DoctorsGrid />
<AppointmentCTA />
    </div>
  )
}
