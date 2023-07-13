'use client'
import React from 'react'
import { A, B, C, D } from './steps'
import Horizontalstepper from '@/components/steppers/Horizontalstepper'

const steps = [
  {
    title: "Join the North American Women's Association (NAWA)",
    caption: "Fill this forms and pay the registration fee to become a member, please contact the director of Membership at nawaghanamembership@gmail.com.  for more enquiries ",
    component: A
  },
  {
    title: "Join the North American Women's Association (NAWA)",
    caption: "Fill this forms and pay the registration fee to become a member, please contact the director of Membership at nawaghanamembership@gmail.com.  for more enquiries ",
    component: B 
  },
  {
    title: "Join the North American Women's Association (NAWA)",
    caption: "Fill this forms and pay the registration fee to become a member, please contact the director of Membership at nawaghanamembership@gmail.com.  for more enquiries ",
    component: C
  },
  {
    title: " ",
    caption: "",
  component: D 
  },

]

function page() {
  return (
    <div className=' max-w-7xl mx-auto py-10  '>
      <Horizontalstepper steps={steps} />
    </div>
  )
}

export default page