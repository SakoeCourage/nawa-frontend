"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Mylistings = [

    {
        caption: 'Tiptop Chinese Restaurant',
        image: '/images/Listing1.png'
    },
    {
        caption: 'Ghana  Montessori',
        image: '/images/Listing2.png'
    },
    {
        caption: "Bena's Groceries",
        image: '/images/Listing3.png'
    },
    {
        caption: 'Afternoon Coffee House',
        image: '/images/Listing4.png'
    },

]


function ListItem({ caption, image }) {
    return <div className="border-2 rounded-md overflow-hidden ">
        <div className='aspect-[6/5] object-cover '>
            <Image alt={caption} src={image} width={500} height={500} className=' w-full h-full ' quality={100} />
        </div>
        <nav className=' p-5 text-center'>
            {caption}
        </nav>
        <nav className="flex w-full border-t-2">
            <button className='w-full px-5 py-3 border-r-2 '>Edit</button>
            <button className='w-full px-5 py-3 '>Remove</button>
        </nav>
    </div>
}



function Listings() {
    return (
        <div>
            <h5 className=' mb-3 font-medium text-alternative-light-dark text-lg'> My Listings</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    Mylistings.map((list, i) => <ListItem key={i} caption={list.caption} image={list.image} />)
                }
                <Link as={<a/>} href='/profile/mylistings/newlisting' className="border-2 rounded-md overflow-hidden flex items-center justify-center h-full w-full  aspect-square  ">
                    <nav className=' flex flex-col items-center gap-2'>
                        <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.0002 0C7.81683 0 0.333496 7.48333 0.333496 16.6667C0.333496 25.85 7.81683 33.3333 17.0002 33.3333C26.1835 33.3333 33.6668 25.85 33.6668 16.6667C33.6668 7.48333 26.1835 0 17.0002 0ZM23.6668 17.9167H18.2502V23.3333C18.2502 24.0167 17.6835 24.5833 17.0002 24.5833C16.3168 24.5833 15.7502 24.0167 15.7502 23.3333V17.9167H10.3335C9.65016 17.9167 9.0835 17.35 9.0835 16.6667C9.0835 15.9833 9.65016 15.4167 10.3335 15.4167H15.7502V10C15.7502 9.31667 16.3168 8.75 17.0002 8.75C17.6835 8.75 18.2502 9.31667 18.2502 10V15.4167H23.6668C24.3502 15.4167 24.9168 15.9833 24.9168 16.6667C24.9168 17.35 24.3502 17.9167 23.6668 17.9167Z" fill="black" />
                        </svg>
                        <span className="font-medium">
                            Add Listing
                        </span>
                    </nav>
                </Link>

            </div>
        </div>
    )
}

export default Listings