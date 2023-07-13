'use client'
import React, { useEffect } from 'react'
import InputTextFlat from '@/components/form/InputTextFlat'
import Primarybutton from '@/components/form/Primarybutton'
import Formhook from '@/components/form/hooks/formhook'
import Link from 'next/link'
import { object, string, number, date } from 'yup';
 function page() {

    const shema = {
        firstName: string().required('This field is required'),
        lastName: string().required('This field is required'),
        address: string().required('This field is required'),
        email: string().required('This field is required').email(),
        dateOfBirth: date().required('This field is required').typeError('invalid date')
    }

    const {data,handleChange,post,errors} = Formhook({
        firstName: '',
        lastName: '',
        address: '',
        email: '',
        dateOfBirth: ''
    },shema)

    const handleSubmit = ()=>post('/user/update',{
        onSucess: ()=> {alert('done')}
    })
 
    
    return (
        <div className=' max-w-5xl mx-auto py-4 text-sm'>
            <nav className=' flex items-center gap-3 text-[#707070]'>
                <Link href='/profile/myaccount'>Account</Link>
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19751 10.1199L5.00084 6.31655C5.45001 5.86738 5.45001 5.13238 5.00084 4.68322L1.19751 0.879883" stroke="#707070" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Personal Details</span>
            </nav>
            <h6 className=' font-medium text-2xl text-[#323232] my-5 mt-10'>
                Personal Details
            </h6>

            <div className=' flex gap-5 lg:flex-row flex-col '>
                <nav className=' w-full grow'>
                    <p className=' text-primary-light-gray text-sm '>
                        This helps us verify your identity, we will need your legal name
                        date of birth and address
                    </p>

                    <nav className=' flex flex-col gap-10 mt-10'>
                        <InputTextFlat error={errors.firstName} value={data.firstName} onChange={(e)=>handleChange('firstName', e.target.value)} label='First Name' />
                        <InputTextFlat value={data.lastName} onChange={(e)=>handleChange('lastName', e.target.value)} error={errors.lastName} label='Last Name' />
                        <InputTextFlat value={data.email} error={errors.email} onChange={(e)=>handleChange('email', e.target.value)} placeholder='L***2@gmail.com' type="email" label='Email Address' />
                        <InputTextFlat value={data.dateOfBirth} error={errors.dateOfBirth} onChange={(e)=>handleChange('dateOfBirth', e.target.value)} type="date" label='Date of Birth' />
                        <InputTextFlat value={data.address} error={errors.address} placeholder='29356 Vera StGold Beach, Oregon(OR),' onChange={(e)=>handleChange('address', e.target.value)} type="address" label='Address' />
                        <nav className=' flex items-center gap-3 '>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 17V11L7 13" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9 11L11 13" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <button>Upload National ID</button>
                        </nav>

                        <nav className=' flex items-center gap-3'>
                            <input className=' accent-alternative-light-dark w-5 h-5' type="checkbox" name="" id="" />
                            <span>
                                I agree to share my personal information with no worries
                            </span>
                        </nav>
                    </nav>
                    <nav className=' my-6 flex items-center justify-end'>
                        <Primarybutton onClick={()=>handleSubmit()} className='w-full' text='Save' />
                    </nav>
                </nav>

                <nav className=' flex justify-center lg:justify-end w-full grow'>
                    <nav className=' py-5 px-3 pr-24 rounded-md border-[1px] border-[#FF0000] h-max'>
                        <svg className=' my-5' width="43" height="43" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.5625 23.167V14.0212C43.5625 12.3128 42.2708 10.3753 40.6667 9.72949L29.0625 4.97949C26.4583 3.91699 23.5208 3.91699 20.9167 4.97949L9.3125 9.72949C7.72917 10.3753 6.4375 12.3128 6.4375 14.0212V23.167C6.4375 33.3545 13.8333 42.8962 23.9375 45.6878C24.625 45.8753 25.375 45.8753 26.0625 45.6878C36.1667 42.8962 43.5625 33.3545 43.5625 23.167ZM26.5625 26.8128V32.292C26.5625 33.1462 25.8542 33.8545 25 33.8545C24.1458 33.8545 23.4375 33.1462 23.4375 32.292V26.8128C21.3333 26.1462 19.7917 24.1878 19.7917 21.8753C19.7917 19.0003 22.125 16.667 25 16.667C27.875 16.667 30.2083 19.0003 30.2083 21.8753C30.2083 24.2087 28.6667 26.1462 26.5625 26.8128Z" fill="#FF0000" />
                        </svg>

                        <nav className=' text-[#323232] font-semibold text-lg'>
                            Why do you need my national ID
                        </nav>
                        <span className=' text-primary-light-gray text-sm'>
                            We are taking this to verify your identity
                        </span>
                    </nav>

                </nav>

            </div>

        </div>
    )
}

export default page