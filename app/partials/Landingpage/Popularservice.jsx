import React from 'react'
import Popluarservicecarousel from '@/components/carousels/Popluarservicecarousel'

export function Popularservice() {
    return (
        <section className=' min-h-[50vh] max-w-7xl mx-auto py-10 '>
            <div className=' flex items-center justify-between'>
                <nav className=' text-primary-light-dark font-bold text-2xl'>Popluar services</nav>
                <nav className=' flex items-center text-[#2320FB]'><span className=' mx-2'>Explore All</span> <svg className=' inline' width="9" height="14" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.13745 20.9L9.28745 12.75C10.25 11.7875 10.25 10.2125 9.28745 9.24998L1.13745 1.09998" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </nav>
            </div>
            <Popluarservicecarousel />
        </section>
    )
}

export default Popularservice