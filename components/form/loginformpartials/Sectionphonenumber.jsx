'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function Sectionphonenumber({ setFormData, formData, setCurrentComponent, setProcessing, handleOnSendOtp }) {
  
    return <>
        <nav className=' font-medium'>
            <nav className=' text-xl font-semibold mb-3'>Sign In</nav>
            <nav className=' text-primary-light-dark'>
                <span className='text-primary-light-dark'>Need Nawa Account ? </span>
                <span className=' text-[#0500FC] ml-4 underline'> Create New Account</span>
            </nav>
        </nav>

        <nav className=' flex flex-col gap-3 mt-10'>
            <label htmlFor="" className=' font-semibold text-alternative-light-dark'>Phone Number</label>
            <nav className=' w-full '>
                <input value={formData.phoneNumber} onChange={(e) => setFormData(cv => cv = { ...cv, phoneNumber: e.target.value })} className='w-full border-b border-alternative-light-dark bg-inherit focus:outline-none focus:border-b p-1 py-1' type="text" name="" id="" />
                <span className=' text-xs text-[#2C2C2C] font-medium mt-1'>We’ll call or text to confirm this is your account</span>
            </nav>
        </nav>
        <button onClick={() => formData.phoneNumber && handleOnSendOtp()} className=' bg-alternative-light-dark text-[#F1EDCB] w-full py-5 rounded-md shadow my-6'>
            Continue
        </button>
    </>
}