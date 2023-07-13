'use client'
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Loadingwheel from '../Spinners/Loadingwheel'
import Sectionphonenumber from './loginformpartials/Sectionphonenumber'
import Sectionverifycode from './loginformpartials/Sectionverifycode'
import Api from '@/api/api'
import { useSession } from 'next-auth/react'
import SectionOauth from './loginformpartials/SectionOauth'


const components = {
    phone: Sectionphonenumber,
    verify: Sectionverifycode
}

function Loginformwithmodal({ setShowLoginForm }) {
   
    const router = useRouter()
    const { data: session, status } = useSession()
    const [formData, setFormData] = useState({
        phoneNumber: '',
        otp: ''
    })
    const [processing, setProcessing] = useState(false)
    const [currentComponent, setCurrentComponent] = useState('phone')
    const Component = components[currentComponent]

    const handleOnSendOtp = async () => {
        setProcessing(true)
        Api.post('/auth/send-otp', formData)
            .then(res => {
                setCurrentComponent('verify')
                setProcessing(false)
            })
            .catch(err => {
                console.log(err)
                setProcessing(false)
            })
    }

    useEffect(() => {
        if(status == 'loading' || status == 'authenticated'){
            router.back()
        }
    }, [status])
    


    return (
        <div className=' fixed inset-0 bg-black/50 z-50 flex items-center justify-center h-screen w-screen p-5'>
            <main className=' bg-primary-desktop-color rounded-md w-full max-w-xl h-max py-1'>
                <nav className=' flex items-center justify-between  py-3 w-full px-3 border-b-2'>
                    <nav></nav>
                    <nav className=' justify-self-center text-alternative-light-dark text-base font-semibold'>Sign In</nav>
                    <button onClick={() => setShowLoginForm(false)}>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00098 1L15 14.9991" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M0.999964 14.9991L14.999 1" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </nav>
                <div className=' p-5 max-w-lg py-12 mx-auto relative'>
                    {processing && <Loadingwheel className=' !absolute' />}
                    <Component
                        handleOnSendOtp={handleOnSendOtp}
                        setProcessing={setProcessing} formData={formData} setFormData={setFormData} setCurrentComponent={setCurrentComponent} />
                    
                    <nav className='strikebg px-5 bg-inherit flex items-center justify-center font-semibold text-alternative-light-dark'>
                        <span className=' px-5 bg-primary-desktop-color'>Or</span>
                    </nav>
                    
                   <SectionOauth />
                </div>
            </main>
        </div>
    )
}

export default Loginformwithmodal