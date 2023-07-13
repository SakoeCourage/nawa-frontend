import React from 'react'
import Image from 'next/image'

export function Aboutinscription() {
    return (
        <section className=' max-w-5xl mx-auto  nawainscription min-h-[70vh] rounded-md flex items-center justify-center text-white'>

            <div className=' flex flex-col gap-7 items-center max-w-xl'>
                <Image alt='NAWA LOGO' width={100} height={100} src='/images/nawalogo.png' />
                <h5 className=' font-semibold text-3xl text-primary-light-orange'> North American Women Association</h5>
                <p className=' text-center'>
                    Nawa was established 45 years ago by a group of ladies looking to find a deeper sense of purpose while living in Ghana.  Since then it has provided thousands of ladies  with meaningful volunteer and social opportunities
                </p>
                <button className=' text-primary-deep-dark bg-white rounded-full py-2 px-5 font-semibold drop-shadow-xl shadow-md'>
                    Become a memeber
                </button>
            </div>

        </section>
    )
}

export default Aboutinscription