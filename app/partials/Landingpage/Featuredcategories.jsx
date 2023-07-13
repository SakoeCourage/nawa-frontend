'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { categoryList } from './Hero'
import { formatnumber } from '@/app/utils'

 function Categorylistitem({ name, source,count }) {
    return <nav  className='relative rounded-full overflow-hidden transition-all ease-in-out cursor-pointer hover:ring-1 ring-white ring-offset-1 '>
        <nav  className="absolute inset-0 flex  items-center justify-center bg-primary-deep-blue/40 text-white transition-opacity duration-500">
            <nav className=' add-ts text-sm text-center p-2 font-semibold drop-shadow-2xl flex flex-col gap-1'>
                <span>{name}</span>
                <span className=' text-xs font-normal'>{formatnumber(Number(count))} </span>
            </nav>
        </nav>
        <Image quality={100} src={source} alt='categories' width={80} height={80} />
    </nav>
}




export function Featuredcategories() {
 const [showMore, setShowMore] = useState(false)
 const categoryListContainer = useRef(null)
 const [currentScrollHeight, setCurrentScrollHeight]  = useState(90)

 useEffect(() => {
   showMore && setCurrentScrollHeight(categoryListContainer.current.scrollHeight)
 }, [showMore])
 
  return (
    <div className=' py-10 bg-gradient-to-b from-primary-deep-orange/5 via-primary-deep-orange/10 to-white overflow-hidden'>
        <div className="max-w-7xl mx-auto">
            <nav className=' flex items-center justify-center text-2xl font-semibold mb-6'>
                Featured Categories
            </nav>
           <div style={{height: `${currentScrollHeight}px`, transition: 'height', transitionDuration: '500ms' } } ref={categoryListContainer} className=' overflow-hidden' >
           <div className=' overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                  {categoryList.map((category,i)=><Categorylistitem key={i} count={category.count} name={category.name} source={category.source}/>)}
            </div>
           </div>
           {!showMore && <nav onClick={()=>setShowMore(true)} className=' mt-12 flex items-center justify-center'>
                <button className=' font-normal p-3 px-8 rounded-full bg-primary-deep-dark text-white'>  View all Categories</button>
            </nav>}
        </div>
    </div>
  )
}

export default Featuredcategories