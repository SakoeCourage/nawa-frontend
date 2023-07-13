'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
"use client"
import { useSession } from 'next-auth/react'

export default function Sectionverifycode({ formData, setCurrentComponent, handleOnSendOtp, setFormData, setProcessing }) {
    const { data: session } = useSession()
    const [credentialError, showCredentialsError] = useState(false)
    const router = useRouter()
    const handleSignIn = async () => {
        setProcessing(true)
        showCredentialsError(false)
        try {
            const data = await signIn('credentials', { ...formData, redirect: true, callbackUrl:'/profile/myaccount' })
            if(data){console.log(data)}
            if (data?.error == null) {
               console.log(data)
            } else if (data?.error) {
                setProcessing(false)
                showCredentialsError(true)
            }

        } catch (error) {
            setProcessing(false)
            if(error){
                console.log(error)
            }
        }
    }

    return <>
        <nav className=' font-medium'>
            <nav className=' text-xl font-semibold mb-3'>Confirm code</nav>
            <nav className='  text-xs'>
                <span className=' text-primary-light-gray'>Enter the code sent to {formData.phoneNumber}   </span>
                <button onClick={() => setCurrentComponent('phone')} className=' text-[#0500FC] text-sm ml-4 underline'> Change number</button>
            </nav>
        </nav>

        <nav className=' flex flex-col gap-3 mt-10'>
            <label htmlFor="" className=' font-semibold text-alternative-light-dark'>Verification code</label>
            {credentialError &&  <span className=' text-xs  font-medium text-red-700'>Invalid verification code</span>}
            <nav className=' w-full '>
                <input onChange={(e) => setFormData(cv => cv = { ...cv, otp: e.target.value })} className='w-full border-b border-alternative-light-dark bg-inherit focus:outline-none focus:border-b p-1 py-1' type="text" name="" id="" />
                <span className=' text-xs text-[#2C2C2C] font-medium mt-1'>Didn’t receive code? <button onClick={() => handleOnSendOtp()} className=' text-[#0500FC] text-xs  underline'>Resend</button></span>
            </nav>
        </nav>
        <button onClick={() => formData?.otp.length >= 4 &&  handleSignIn()} className=' bg-alternative-light-dark text-[#F1EDCB] w-full py-5 rounded-md shadow my-6'>
            Confirm Code
        </button>

    </>
}
