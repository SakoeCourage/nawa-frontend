'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { scroller } from 'react-scroll'
import ScrollIndicator from './ScrollIndicator'
import Horizontalcarousel from './Horizontalcarousel'

export const services = [
    {
        name: 'Kempinski Hotel',
        banner: '/images/Kempinski.jpg',
        inscription: 'Enjoy the most luxuries places in the country like no where else'
    },
    {
        name: 'Movenpick',
        banner: '/images/movenpick.jpg',
        inscription: 'Enjoy the most luxuries places in the country like no where else and a very long inscription and long and long and long'
    },
    {
        name: 'Cape Three Point',
        banner: '/images/capethreepoint.jpg',
        inscription: 'Enjoy the most luxuries places in the country like no where else'
    },
    {
        name: 'Capecoast Castle',
        banner: '/images/capecoastcastle.jpg',
        inscription: 'Enjoy the most luxuries places in the country like no where else'
    },
    {
        name: 'Mole National Park',
        banner: '/images/Molenationalpark.jpg',
        inscription: 'Enjoy the most luxuries places in the country like no where else and some long inscription '
    },
    {
        name: 'Movenpick',
        banner: '/images/movenpick.jpg',
        inscription: 'Enjoy the most luxuries places in the country like no where else and a very long inscription and long and long and long'
    },
    {
        name: 'Cape Three Point',
        banner: '/images/capethreepoint.jpg',
        inscription: 'Enjoy the most luxuries places in the country like no where else'
    }

]




function Servicecard({ banner, name, inscription, active }) {
    return <div onScroll={(e) => e.preventDefault()} className={`scroll-card  h-full aspect-[3/2]  block min-w-[60%] relative servicecard ${active && 'active'} overflow-hidden rounded-md snap-center  `}>
        <div className=' absolute inset-0 bg-gray-200/25 overlay z-20 flex items-end transition-colors'>
            <nav className=' w-full p-5 bg-gradient-to-b from-transparent via-black/50  to-black/60'>
                <nav className='  drop-shadow-md max-w-md  mx-auto w-full'>
                    <nav className='text-white font-medium text-xl truncate'>{name}</nav>
                    <nav className=' text-sm text-white/70 opacity-0 h-0 inscription transition-[opacity] delay-150 duration-500 '>
                        {inscription}
                    </nav>
                </nav>

            </nav>
        </div>
        <Image className='transition-transform duration-300 ease-in-out image rounded-md w-full h-full object-cover' alt={name} src={banner} width={1000} height={1000} quality={100} />
    </div>
}




function Popluarservicecarousel() {
    const [currentIndex, setCurrentIndex] = useState(1)


    return (
        <Horizontalcarousel className='py-4 min-h-[40vh]' getCurrentIndex={(i) => setCurrentIndex(i)}>
            {services.map((service, i) => <Servicecard key={i} active={Number(i + 1) === Number(currentIndex)} inscription={service.inscription} banner={service.banner} name={service.name} />)}
        </Horizontalcarousel>
    )
}

export default Popluarservicecarousel