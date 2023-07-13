'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Writereview from './Writereview'
import Primarybutton from '@/components/form/Primarybutton'

function Reviewitem() {
    return <nav className=' p-10  bg-[#EBFEFF]'>
        <nav>
            <nav className='flex item-center gap-2  max-h-24'>
                <Image src='/images/Ellipse 16.png' className='  rounded-full' width={50} height={50} quality={100} alt='reviewer' />
                <nav className=' h-full my-auto'>
                    <h1 className=' font-bold text-lg text-primary-light-dark'>James Archer</h1>
                    <nav className=' flex items-center gap-1'>
                        <svg width="10" height="10" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.57712 1.78536L5.16379 2.95869C5.24379 3.12203 5.45712 3.27869 5.63712 3.30869L6.70046 3.48536C7.38046 3.59869 7.54046 4.09203 7.05046 4.57869L6.22379 5.40536C6.08379 5.54536 6.00712 5.81536 6.05046 6.00869L6.28712 7.03203C6.47379 7.84203 6.04379 8.15536 5.32712 7.73203L4.33046 7.14203C4.15046 7.03536 3.85379 7.03536 3.67046 7.14203L2.67379 7.73203C1.96046 8.15536 1.52712 7.8387 1.71379 7.03203L1.95046 6.00869C1.99379 5.81536 1.91712 5.54536 1.77712 5.40536L0.950458 4.57869C0.463791 4.09203 0.620458 3.59869 1.30046 3.48536L2.36379 3.30869C2.54046 3.27869 2.75379 3.12203 2.83379 2.95869L3.42046 1.78536C3.74046 1.14869 4.26046 1.14869 4.57712 1.78536Z" fill="#00873C" stroke="#00873C" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className=' text-xs'>
                            5 star
                        </span>
                    </nav>
                </nav>
            </nav>
            <nav className=' mt-5 flex flex-col gap-4'>
                <h1 className=' font-bold text-xl text-primary-light-dark'>Top not service</h1>
                <p className=' text-sm'>
                    The waiters are active and provide good services, as the meal also matches how good their services really nice place to eat and relax definitely would recommend to my friends visiting ghana
                </p>
            </nav>


        </nav>
    </nav>
}

function ReviewList() {
    return <>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
            <Reviewitem />
            <Reviewitem />
            <Reviewitem />
        </div>
        <div className=' flex justify-center mt-10'>
           <Primarybutton text="See More"/>
        </div></>

}


const reviewcomponents = {
    ReviewList: ReviewList,
    Writereview: Writereview
}


function Servicereviews() {
    const [component, setComponent] = useState('ReviewList')
    const Component = reviewcomponents[component]

    return (
        <div className=' my-8'>
            <nav className="flex items-center justify-between">
                <h6 className=' my-4 font-semibold text-base'>
                    Reviews
                </h6>
                <button onClick={()=>setComponent('Writereview')} className=' flex items-center gap-1'>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8098 3.94009C20.4998 7.21009 17.5098 11.4801 14.6598 14.2701C14.2498 11.6901 12.1898 9.67009 9.58984 9.31009C12.3898 6.45009 16.6898 3.42009 19.9698 2.10009C20.5498 1.88009 21.1298 2.05009 21.4898 2.41009C21.8698 2.79009 22.0498 3.36009 21.8098 3.94009Z" fill="#1B1B1B" />
                        <path d="M13.7801 15.09C13.5801 15.26 13.3801 15.43 13.1801 15.59L11.3901 17.02C11.3901 16.99 11.3801 16.95 11.3801 16.91C11.2401 15.84 10.7401 14.85 9.93012 14.04C9.11012 13.22 8.09012 12.72 6.97012 12.58C6.94012 12.58 6.90012 12.57 6.87012 12.57L8.32012 10.74C8.46012 10.56 8.61012 10.39 8.77012 10.21L9.45012 10.3C11.6001 10.6 13.3301 12.29 13.6701 14.43L13.7801 15.09Z" fill="#1B1B1B" />
                        <path d="M10.4298 17.6201C10.4298 18.7201 10.0098 19.7701 9.20976 20.5601C8.59976 21.1801 7.77977 21.6001 6.77977 21.7201L4.32976 21.9901C2.98976 22.1401 1.83976 20.9901 1.98976 19.6401L2.25976 17.1801C2.49976 14.9901 4.32976 13.5901 6.26976 13.5501C6.45976 13.5401 6.66976 13.5501 6.86976 13.5701C7.71976 13.6801 8.53976 14.0701 9.22976 14.7501C9.89976 15.4201 10.2798 16.2101 10.3898 17.0401C10.4098 17.2401 10.4298 17.4301 10.4298 17.6201Z" fill="#1B1B1B" />
                    </svg>
                    <span className=' underline'>Review</span>
                </button>
            </nav>
            <Component />
        </div>
    )
}

export default Servicereviews