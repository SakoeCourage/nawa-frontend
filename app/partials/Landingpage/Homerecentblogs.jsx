import React from 'react'
import Image from 'next/image'


const Blogs = [
    {
        title: 'The best spa for your relaxation in accra.',
        category: 'Health & Fitness',
        thumbnail: '/images/Rectangle 50.png'
    },
    {
        title: 'Looking for a memorable experience, top 10 best locations to visit now.',
        category: 'Art & CUlture',
        thumbnail: '/images/Rectangle 51.png'
    },
    {
        title: 'Here are some of the best school you can enroll your kids.',
        category: 'Education',
        thumbnail: '/images/Rectangle 52.png'
    }
]


function Blogcard({ title, category, thumbnail }) {

    return <div className=' flex flex-col h-full w-full '>
        <Image className=' aspect-square rounded-md h-full w-full basis-[80%] ' alt={title} src={thumbnail} quality={100} width={1000} height={1000} />
        <nav className='basis-[20%] py-2'>
            <h5 className=' uppercase py-1 w-full truncate text-blue-700 font-semibold text-sm'> {category}</h5>
            <p className=' text-primary-deep-dark font-medium'>{title}</p>
        </nav>
    </div>
}

export function Homerecentblogs() {
    return (
        <section className=' py-10 pt-20 max-w-7xl mx-auto '>
            <nav className=' mb-10'>
                <nav className=' text-center w-full font-semibold text-primary-light-dark text-4xl'>Blogs</nav>
                <nav className=' text-center w-full mt-5'>Whats new? Get news updates and guides</nav>
            </nav>

            <nav className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {Blogs.map((blog, i) => <Blogcard key={i} title={blog.title} thumbnail={blog.thumbnail} category={blog.category} />)}
            </nav>
        </section>
    )
}

export default Homerecentblogs