'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Browselist } from '../partials/Landingpage/Browsecategories'
import Link from 'next/link'
import Api from '@/api/api'
import Filterpanel from './Filterpanel'
import { Searchbar } from '../partials/Landingpage'
export const categories = ['All', 'Beauty', 'Fitness', 'Restaurant', 'Groceries', 'Food', 'Health', 'Resort', 'Schools', 'Hospitals', 'Saloon', 'Barbershop']

function Categorypill({ name, active }) {
    return <button className={`flex items-center justify-center w-max rounded-full bg-[#CDCDCD] text-white font-semibold p-2 px-5  ${active && '!bg-primary-light-dark'}`}>
        {name}
    </button>
}


function Adoverlay({ caption }) {
    return <div className='absolute inset-0 bg-black/10'>
        <nav className=' absolute top-5 right-5 text-primary-deep-dark bg-primary-deep-orange p-2 px-3 font-semibold rounded-md shadow-md'>
            Ad
        </nav>

        <nav className=' absolute bottom-5  flex items-center justify-center w-full px-2'>
            <nav className=' bg-primary-light-orange px-5 py-3 font-bold rounded-md shadow-md truncate'>
                {caption}
            </nav>
        </nav>
    </div>
}

function Originaloverlay({ caption }) {
    return <div className='absolute inset-0  flex items-center justify-center text-white px-2'>
        {/* <div className=' font-semibold text-xl truncate'>
            {caption}
        </div> */}
    </div>
}

const cardcategory = {
    Ad: Adoverlay,
    Original: Originaloverlay
}

function Browsecard({ caption, type, path, place, reviews, rating, location }) {
    const Component = cardcategory[type]
    return <Link href='/service'  className='aspect-square  rounded-md overflow-hidden flex flex-col'>
        <div className='rounded-md overflow-hidden relative basis-[80%] '>
            <Component caption={caption} />
            <Image quality={100} className=' w-full h-full' width={500} height={500} src={path} alt={caption} />
        </div>
        <nav className='basis-[20%] text-black p-1'>
            {type == 'Original' ? <nav className=' flex flex-col'>
                <nav className="flex items-center justify-between">
                    <nav className=' font-bold text-lg text-primary-light-dark'>{place}</nav>
                    <nav className=' flex items-center gap-1  text-[#1B1B1B] '>
                        <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.67307 2.1982L6.35751 3.56709C6.45085 3.75764 6.69973 3.94042 6.90973 3.97542L8.15029 4.18153C8.94362 4.31375 9.13029 4.88931 8.55862 5.45709L7.59418 6.42153C7.43085 6.58486 7.3414 6.89986 7.39196 7.12542L7.66807 8.31931C7.88585 9.26431 7.38418 9.62986 6.54807 9.13597L5.38529 8.44764C5.17529 8.3232 4.82918 8.3232 4.61529 8.44764L3.45251 9.13597C2.62029 9.62986 2.11473 9.26042 2.33251 8.31931L2.60862 7.12542C2.65918 6.89986 2.56973 6.58486 2.4064 6.42153L1.44196 5.45709C0.874179 4.88931 1.05696 4.31375 1.85029 4.18153L3.09085 3.97542C3.29696 3.94042 3.54585 3.75764 3.63918 3.56709L4.32362 2.1982C4.69696 1.45542 5.30362 1.45542 5.67307 2.1982Z" fill="#323232" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className=' text-xs text-[#1B1B1B]'>{rating}</span>
                        <svg className=' mx-1' width="4" height="5" viewBox="0 0 4 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2.5" r="2" fill="#323232" />
                        </svg>
                        <nav className='text-xs text-[#1B1B1B]'>
                            {reviews}
                            <span className=' ml-1'>reviews</span>
                        </nav>

                    </nav>
                </nav>
                <nav className='text-[#1B1B1B] text-xs'>
                    {location}
                </nav>
            </nav> :
                <nav></nav>}
        </nav>
    </Link>


}




function ExploreList({ data }) {
    const [Browseitems, setBrowseItems] = useState([])

    useEffect(() => {
        Api.get('/service/all-services').then(res => {
            console.log(res)
            setBrowseItems(res.data?.services)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div className=' pt-16 pb-10 w-screen lg:w-full px-2 lg:px-0 '>
            <div className=' grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-3'>
                {Browselist.map((list, i) => <Browsecard
                    caption={list.caption}
                    type={list.type}
                    path={list.path}
                    reviews={25}
                    location={list.location}
                    place={list.place}
                    rating={4.9}
                    key={i}
                />)}
            </div>
        </div>
    )
}

function Exploresection() {


    return (
        <div className=' w-full'>
            <div className=' flex  w-full'>
                <Filterpanel />
                <div className=' w-screen lg:max-w-6xl mx-auto py-3'>
                    <div className=' bg-white min-h-[20vh] flex items-center'>
                        <div className=' max-w-5xl mx-auto w-full'>
                            <Searchbar />
                        </div>
                    </div>
                    <nav className="flex items-center gap-2 py-1 overflow-x-scroll overflow-y-hidden hidescroll w-full mx-auto">
                        {categories.map((category, i) => <Categorypill active={i == 0} name={category} key={i} />)}
                    </nav>
                    <ExploreList />
                    <nav className=' flex items-center justify-center '>
                        <button className=' bg-primary-deep-blue text-white p-4 px-6 text-sm'>
                            Load More
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Exploresection