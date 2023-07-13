"use client"
import React, { useState } from 'react'
import Inputselect from '@/components/form/Inputselect'
import InputTextFlat from '@/components/form/InputTextFlat'
export function C() {
  const [formData, setFormData] = useState({
    method: null
  })
  return (
    <div className=' max-w-lg mx-auto flex flex-col gap-8 py-7 min-h-full '>
      <Inputselect onChange={(e) => console.log(e.target.value)} placeholder="Select Payment Method" data={[{ label: 'Card Payment', value: "Card Payment" }, { label: 'Cash', value: "Cash" }]} />

      <div className=' py-3'>
        <nav className=' my-10 text-center text-base  text-alternative-light-dark font-semibold'>Add Your Credit/Debit card details </nav>
        <nav className="flex flex-col gap-7">
          <InputTextFlat
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            }
            placeholder='Name on card' />
          <InputTextFlat
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8.5H13.5" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 16.5H8" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.5 16.5H14.5" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.5 6.25H22" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" />
                <path d="M19.25 9V3.5" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" />
              </svg>

            }
            placeholder='Card Number' />
          <nav className=' flex flex-col md:flex-row gap-7 w-full '>
            <InputTextFlat
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2.00012V5.00012" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 2.00012V5.00012" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M3.5 9.09009H20.5" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21 8.50012V17.0001C21 20.0001 19.5 22.0001 16 22.0001H8C4.5 22.0001 3 20.0001 3 17.0001V8.50012C3 5.50012 4.5 3.50012 8 3.50012H16C19.5 3.50012 21 5.50012 21 8.50012Z" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M11.9955 13.7002H12.0045" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.29431 13.7002H8.30329" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.29431 16.7002H8.30329" stroke="#1B1B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              }
              className='!w-full' type="date" />
            <InputTextFlat
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10.0001V8.00012C6 4.69012 7 2.00012 12 2.00012C17 2.00012 18 4.69012 18 8.00012V10.0001" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12 18.5001C13.3807 18.5001 14.5 17.3808 14.5 16.0001C14.5 14.6194 13.3807 13.5001 12 13.5001C10.6193 13.5001 9.5 14.6194 9.5 16.0001C9.5 17.3808 10.6193 18.5001 12 18.5001Z" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17 22.0001H7C3 22.0001 2 21.0001 2 17.0001V15.0001C2 11.0001 3 10.0001 7 10.0001H17C21 10.0001 22 11.0001 22 15.0001V17.0001C22 21.0001 21 22.0001 17 22.0001Z" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              }
              className='!w-full' placeholder='CVV' />
          </nav>
        </nav>

      </div>
      <div className="mt-auto flex items-center justify-center">
        <nav className=' font-semibold text-lg'>
          <span>Reigisteration Fee:</span>
          <span className=' ml-1 text-[#00873C]'>GHS 60</span>
        </nav>
      </div>

    </div>
  )
}

export default C