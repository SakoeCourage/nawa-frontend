import React from 'react'
import Image from 'next/image'
export  function Homesupport() {
    return (
        <section className=' grid grid-cols-1  md:grid-cols-5  min-h-[50vh] max-w-5xl mx-auto'>
            <nav className=' flex flex-col gap-7 items-start justify-center md:col-span-3 max-w-lg'>
                <h6 className=' font-semibold text-primary-deep-dark text-3xl'>
                    Support Nawa To Change Lives
                </h6>
                <p>
                    We aim to improve the lives of women & children in Ghana by funding
                    humanitarian projects and encourage volunteering for local charities.
                </p>
                <nav className=' flex items-center gap-3 '>
                    <button className=' font-normal p-3 px-8 rounded-full bg-primary-deep-dark text-white'> Donate</button>
                    <button className=' font-normal p-3 px-8 rounded-full text-primary-deep-dark'> Our Projects</button>
                </nav>
            </nav>
            <nav className='flex items-center justify-end  w-full md:col-span-2  '>
                <nav className="relative w-full h-full  pl-16   ">
                    <Image quality={100} width={400} height={400} className='transform translate-y-[70%]   w-36 ' alt='' src="/images/Rectangle 53.png" />
                    <Image quality={100} width={400} height={400} className=' transform translate-x-[100%] translate-y-4  w-36 ' alt='' src="/images/Rectangle 55.png" />
                    <Image quality={100} width={400} height={400} className='transform -translate-y-[24%]    w-44 ' alt='' src="/images/Rectangle 54.png" />
                </nav>

            </nav>
        </section>
    )
}

export default Homesupport
