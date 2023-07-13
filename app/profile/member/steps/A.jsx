"use client"
import React from 'react'
import InputTextBordered from '@/components/form/InputTextBordered'

export function A() {
    return (
        <div className=' max-w-lg mx-auto flex flex-col gap-8 py-7'>
            <InputTextBordered placeholder="Full Name" />
            <InputTextBordered placeholder="Email" />
            <InputTextBordered placeholder="Phone Number" />
            <InputTextBordered placeholder="Whatsapp Number" />

            <nav className=' flex flex-col gap-4'>
                <label htmlFor="" className=' text-base'>
                    Are you a new member or are you renewing your membership?
                </label>
                <nav className=' flex items-center gap-3'>
                    <input name="membership" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>New Member </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="membership" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Renewing Membership </nav>
                </nav>
            </nav>
            <nav className=' flex flex-col gap-4'>
                <label htmlFor="" className=' text-base'>
                    Where are you renewing your membership?
                </label>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Online </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Coffee Morning  </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Market Day  </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Franglais Meetup  </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Town Hall  </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Other  </nav>
                </nav>
            </nav>

        </div>
    )
}

export default A