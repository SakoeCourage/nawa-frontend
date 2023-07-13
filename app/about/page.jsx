import React from 'react'
import Logoinscription from './Logoinscription'
import Womenempowering from './Womenempowering'
import Aboutinscription from '../partials/Landingpage/Aboutinscription'
import Homesupport from '../partials/Landingpage/Homesupport'
import Popularservice from '../partials/Landingpage/Popularservice'

function page() {
    return (
        <section className=''>
            <div className=' pt-[var(--headerHeight)] bg-[#031346] '>
                <nav className=' flex flex-col items-center justify-center h-full  min-h-[10vh] py-16 gap-5'>
                    <h6 className=' text-white font-semibold text-4xl'>
                        About Us
                    </h6>
                    <span  className=' text-white/80 text-sm'>About No Worries and North American Women’s Association (NAWA)</span>
                </nav>
            </div>
            <Logoinscription/>
            <Womenempowering/>
            <nav className=' py-10'>
            <Aboutinscription/>
            </nav>
            <Homesupport />
            <Popularservice />
        </section>
    )
}

export default page