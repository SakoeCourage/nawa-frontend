'use client'
import React from 'react'
import Image from 'next/image'
export function D() {
    return (
        <div className=' max-w-lg mx-auto flex flex-col gap-7 py-7'>
            <nav className=' border-2 rounded-md'>
                <Image alt='' className=' object-cover aspect-[6/5] w-full h-full' src='/images/Rectangle 73.png' width={500} height={500} quality={100} />
                <nav className="p-5 font-semibold text-alternative-light-dark text-center text-lg">
                    Tiptop Chinese restaurant
                </nav>
            </nav>
            <nav className=' flex flex-col gap-2 items-center'>
                <svg width="54" height="54" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="32" fill="#23B35F" />
                    <path d="M48 21L26 43L16 33" stroke="#FCFCFC" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className=' text-lg font-medium text-alternative-light-dark '>
                    Done
                </span>
                <span>
                    15 photos
                </span>
            </nav>
            <nav className=' flex mt-4 flex-col gap-4 items-center'>
                <span className=' font-medium text-primary-light-gray text-sm'>Now that you listing is created lets promote  it or continue browsing</span>
                <button className=' p-5 text-alternative-light-dark rounded-md bg-[#00F86E] w-max text-base font-bold px-12'>
                    Promote
                </button>
            </nav>
        </div>
    )
}

export default D