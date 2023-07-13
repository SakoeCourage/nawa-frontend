import React from 'react'
import Image from 'next/image'
import Horizontalcarousel from '@/components/carousels/Horizontalcarousel'
export const Browselist = [
    {
        caption: 'The Ice-cream Palace',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Ad',
        path: "/images/Rectangle 2.png",
        favourite: false,
    },
    {
        caption: 'Interior Kings',
        title: 'This is sample title',
        category: 'Fashion',
        author: 'Sakoe Courage',
        type: 'Ad',
        path: "/images/Rectangle 3.png",
        favourite: false,
    },
    {
        caption: 'Restaurant',
        title: 'This is sample title',
        category: 'Financial',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 4.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Education',
        title: 'This is sample title',
        category: 'Financial',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 5.png",
        favourite: true,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Resort',
        title: 'This is sample title',
        category: 'Financial',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 6.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Children',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 7.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Education',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 5.png",
        favourite: true,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Resort',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        caption: 'Tourism and Hospitality',
        title: 'This is sample title',
        type: 'Original',
        path: "/images/Rectangle 6.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Children',
        title: 'This is sample title',
        type: 'Original',
        category: 'Educational',
        author: 'Sakoe Courage',
        caption: 'Tourism and Hospitality',
        title: 'This is sample title',
        path: "/images/Rectangle 7.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Education',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 5.png",
        favourite: true,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Resort',
        title: 'This is sample title',
        type: 'Original',
        category: 'Educational',
        author: 'Sakoe Courage',
        path: "/images/Rectangle 6.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Children',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 7.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Education',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 5.png",
        favourite: true,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Resort',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 6.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Children',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 7.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Education',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 5.png",
        favourite: true,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Children',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 7.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Saloons & Beauty',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 8.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
    {
        caption: 'Entertainment',
        title: 'This is sample title',
        category: 'Educational',
        author: 'Sakoe Courage',
        type: 'Original',
        path: "/images/Rectangle 9.png",
        favourite: false,
        location: 'La Teshie Rd, Accra',
        place: 'Laboma Resort',
        reviews: 25,
        rating: 4.9
    },
]




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

function Originaloverlay({ caption, title, location }) {
    return <div className='absolute inset-0  flex items-center justify-center text-white px-2 flex-col'>
        <div className=' font-semibold text-xl truncate  mt-auto flex flex-col mb-5 p-2 w-full bg-black/20  '>
            <nav className=' truncate font-semibold text-sm tracking-wide'>{title}</nav>
            <nav className="text-xs font-normal flex items-center gap-1">
                <svg className=' h-3 w-3 inline' viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.62 6.95C16.57 2.33 12.54 0.25 8.99997 0.25C8.99997 0.25 8.99997 0.25 8.98997 0.25C5.45997 0.25 1.41997 2.32 0.369973 6.94C-0.800027 12.1 2.35997 16.47 5.21997 19.22C6.27997 20.24 7.63997 20.75 8.99997 20.75C10.36 20.75 11.72 20.24 12.77 19.22C15.63 16.47 18.79 12.11 17.62 6.95ZM8.99997 11.96C7.25997 11.96 5.84997 10.55 5.84997 8.81C5.84997 7.07 7.25997 5.66 8.99997 5.66C10.74 5.66 12.15 7.07 12.15 8.81C12.15 10.55 10.74 11.96 8.99997 11.96Z" fill="white" />
                </svg>
               <span className=' inline text-xs'> {location}</span>
                </nav>
        </div>
    </div>
}

const cardcategory = {
    Ad: Adoverlay,
    Original: Originaloverlay
}

function Browsecard({ caption, type, path, title, location }) {
    const Component = cardcategory[type]
    return <div className='aspect-square cursor-pointer min-w-[12rem] md:min-w-[15rem] rounded-md overflow-hidden relative snap-center '>
        <Component caption={caption} title={title} location={location} />
        <Image quality={100} className=' w-full h-full' width={500} height={500} src={path} alt={caption} />
    </div>
}



function Categorysection({ name, link, content, thumbnail ,bg,lowtext, hightext }) {
    return <div className={`px-5 md:px-0 ${bg}`}>
        <div className='py-7 max-w-7xl mx-auto '>
            <div className=' flex items-center justify-between'>
                <nav className={`mb-5 font-semibold text-2xl ${lowtext}`}>
                    {name} Service
                </nav>
                <nav className={` underline flex items-center gap-2 ${hightext}`}>
                    <span className=' text-base md:inline hidden my-auto'>See more items</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className=' h-5 w-5' viewBox="0 0 24 24"><path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M6 13h8l-3.5 3.5l1.42 1.42L17.84 12l-5.92-5.92L10.5 7.5L14 11H6v2Z" /></svg>
                </nav>
            </div>
            <Horizontalcarousel allowAutoScroll={false}>
                {content.map((list, i) => <Browsecard
                    caption={list.caption}
                    type={list.type}
                    path={list.path}
                    title={list.title}
                    location={list.location}
                    key={i}
                />)}
            </Horizontalcarousel>

        </div>
    </div>
}




export function Browsecategories() {
    return (
        <>
                <Categorysection bg='bg-white' lowtext='text-sky-600' hightext='text-sky-900' content={Browselist} name=' Financial' thumbnail="/images/Rectangle 7.png" />
                <Categorysection bg='bg-gradient-to-b from-white  via-primary-deep-orange/10 to-white' lowtext='text-orange-600' hightext='text-orange-900' content={Browselist} name=' Educational' thumbnail="/images/Rectangle 7.png" />
        </>
    )
}

export default Browsecategories