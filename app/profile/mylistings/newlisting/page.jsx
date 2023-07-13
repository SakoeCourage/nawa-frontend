'use client'
import React from 'react'
import {A,B,C,D} from './steps'
import { useRouter } from 'next/navigation'
import Horizontalstepper from '@/components/steppers/Horizontalstepper'

const steps = [
    {
        title: "New Listing",
        caption : "lets create a new listing and get your service out there",
        component: A
   
    },
    {
        title: "Contacts",
        caption : "Add contacts and means users can reach you.",
        component: B
    },
    {
        title: "Add some photos of  your service ",
        caption : "minimum upload of 2, max of 5 photos",
        component: C
    },
    {
        title: " ",
        caption : "",
        component: D
    },
   
]

const initialFormData = {
    serviceName: '',
    serviceDescription: '',
    CategoryId: '',
    SubCategoryId: '',
    contactNumber: '',
    whatsappNumber: '',
    location: '',
    rating: '',
    images: [],
    openingTime: '',
    closingTime: '',
    workingDays: '',
    minimumServicePrice: '',
    maximumServicePrice: '',
    isPromoted: false,
    requiresMembership: false,
  };



function page() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const onStepsComplete = () =>{
        router.push('/profile/mylistings/')
    }
  return (
    <div className=' max-w-7xl mx-auto'>
        <Horizontalstepper onComplete={()=> onStepsComplete()} steps={steps} currentData={initialFormData}/>
    </div>
  )
}

export default page