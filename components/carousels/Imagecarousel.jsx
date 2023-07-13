'use client'

import Image from "next/image"
import { useState, useEffect } from "react"

function Imagecarousel({ services }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)


    const nextImage = () => {
        if(!(currentImageIndex === Number(services.length - 1))) {
            setCurrentImageIndex(cv => cv = cv + 1)
        }else
        {   setCurrentImageIndex(0)}
    }
    const prevImage = () => {
        if(currentImageIndex > 0) {setCurrentImageIndex(cv => cv = cv - 1)}else{
            setCurrentImageIndex(services.length-1)
        }
    }



    return <div className=' aspect-[12/5] max-h-[80vh] w-full mx-auto relative isolate flex justify-center'>
        <div className="   w-full z-30 mx-auto max-w-7xl h-full relative">
            <button onClick={() => prevImage()} className={` absolute left-10 z-30 w-16 h-16 hover:opacity-100 inset-y-[40%] opacity-70 `}>
                <svg width="100%" height="100%" viewBox="0 0 92 92" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="46" cy="46" r="46" transform="rotate(-180 46 46)" fill="white" fill-opacity="1" />
                    <path d="M37.9393 44.9393C37.3536 45.5251 37.3536 46.4749 37.9393 47.0607L47.4853 56.6066C48.0711 57.1924 49.0208 57.1924 49.6066 56.6066C50.1924 56.0208 50.1924 55.0711 49.6066 54.4853L41.1213 46L49.6066 37.5147C50.1924 36.9289 50.1924 35.9792 49.6066 35.3934C49.0208 34.8076 48.0711 34.8076 47.4853 35.3934L37.9393 44.9393ZM41 44.5L39 44.5L39 47.5L41 47.5L41 44.5Z" fill="#555555" />
                </svg>
            </button>
            <button onClick={() => nextImage()} className={` absolute right-10 z-30 w-16 h-16 hover:opacity-100 inset-y-[40%] opacity-70 `}>
                <svg width="100%" height="100%" viewBox="0 0 92 92" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="46" cy="46" r="46" fill="white" fill-opacity="1" />
                    <path d="M54.0607 47.0607C54.6464 46.4749 54.6464 45.5251 54.0607 44.9393L44.5147 35.3934C43.9289 34.8076 42.9792 34.8076 42.3934 35.3934C41.8076 35.9792 41.8076 36.9289 42.3934 37.5147L50.8787 46L42.3934 54.4853C41.8076 55.0711 41.8076 56.0208 42.3934 56.6066C42.9792 57.1924 43.9289 57.1924 44.5147 56.6066L54.0607 47.0607ZM51 47.5H53V44.5H51V47.5Z" fill="#555555" />
                </svg>
            </button>
            <nav className=" absolute bottom-10 right-10 rounded-md bg-white text-primary-deep-dark z-30 text-sm px-3 py-0 font-bold">
                {currentImageIndex + 1}/{Number(services.length)}
            </nav>
        </div>
        <Image loading="lazy" alt='' className=" h-full w-full isolate absolute inset-0" src={services[currentImageIndex].banner} height={2000} width={2000} quality={100} />
    </div>

}

export default Imagecarousel