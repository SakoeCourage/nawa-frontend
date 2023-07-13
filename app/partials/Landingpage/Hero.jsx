import React from 'react'

export const categoryList = [
    {
        name: 'Food and Nutrition',
        source: '/images/Ellipse 3.png',
        count: 232323

    },
    {
        name: 'Rental',
        source: '/images/Ellipse 4.png',
        count: 3323
    },
    {
        name: 'Financials',
        source: '/images/Ellipse 5.png',
        count: 323
    },
    {
        name: 'Information Technology',
        source: '/images/Ellipse 6.png',
        count: 2323
    },
    {
        name: 'Professional and Consulting',
        source: '/images/Ellipse 7.png',
        count: 54323
    },
    {
        name: 'Creative and Cultural',
        source: '/images/Ellipse 8.png',
        count: 23
    },
    {
        name: 'Tourism and Hospitality',
        source: '/images/Ellipse 9.png',
        count: 21223
    },
    {
        name: 'Educational',
        source: '/images/Ellipse 10.png',
        count: 2323
    },
    {
        name: 'Healthcare',
        source: '/images/Ellipse 11.png',
        count: 323
    },
]

export function Searchbar() {
    return <div className=' flex items-center gap-2 px-3 py-2 bg-primary-deep-dark rounded-lg max-w-4xl w-full mx-auto'>
        <nav className='flex items-center gap-3 text-white px-2 py-2 '>
            <svg width="16" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.62 6.95C16.57 2.33 12.54 0.25 8.99997 0.25C8.99997 0.25 8.99997 0.25 8.98997 0.25C5.45997 0.25 1.41997 2.32 0.369973 6.94C-0.800027 12.1 2.35997 16.47 5.21997 19.22C6.27997 20.24 7.63997 20.75 8.99997 20.75C10.36 20.75 11.72 20.24 12.77 19.22C15.63 16.47 18.79 12.11 17.62 6.95ZM8.99997 11.96C7.25997 11.96 5.84997 10.55 5.84997 8.81C5.84997 7.07 7.25997 5.66 8.99997 5.66C10.74 5.66 12.15 7.07 12.15 8.81C12.15 10.55 10.74 11.96 8.99997 11.96Z" fill="white" />
            </svg>
            <span>Location</span>
        </nav>
        <hr className='   rotate-90 border-primary-light-dark shadow-md w-8 bg-inherit h-full' />
        <input type="search" className=' p-4 grow bg-inherit text-primary-light-orange focus:outline-none focus:border-none' placeholder=' what are you looking for' />
        <svg className=' mx-2' width="12" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.9201 1.44995L10.4001 7.96995C9.63008 8.73995 8.37008 8.73995 7.60008 7.96995L1.08008 1.44995" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <button className=' p-3 px-7 text-primary-light-dark rounded-lg font-semibold bg-primary-deep-orange'>
            Search
        </button>
    </div>
}

function Categorylistitem({ name, source }) {
    return <nav className='flex add-ts items-center gap-1 bg-black/50 backdrop-blur-sm text-sm px-4 rounded-md text-white p-2 whitespace-nowrap  transition-all ease-in-out cursor-pointer w-full  '>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"/></svg> {name}
    </nav>
}

export function Hero() {
    return (
        <div className=' min-h-[90vh] w-full flex flex-col justify-around gap-10 h-full relative '>
            <nav className=' flex flex-col gap-3 w-full items-center '>
                <span className=' text-4xl md:text-5xl text-primary-light-orange font-bold add-ts'>No Worries Ghana </span>
                <span className=' text-white font-semibold text-lg add-ts'>The Essential Guide To Living In Ghana</span>
            </nav>
            <nav className=' w-full'>
                <Searchbar />
                <nav className=' flex items-center flex-nowrap gap-2 max-w-4xl  mt-2 mx-auto px-4 overflow-y-hidden overflow-x-scroll hidescroll'>
                    {categoryList.map((category, i) => <Categorylistitem key={i} name={category.name} source={category.source} />)}
                </nav>
            </nav>

            <nav>

            </nav>

        </div>
    )
}

export default Hero