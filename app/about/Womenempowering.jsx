import React from 'react'
import Image from 'next/image'


function Womenempowering() {
    return (
        <section className=' max-w-5xl w-full mx-auto py-14 grid grid-cols-1 md:grid-cols-2'>
            <div className=' col-span-1 flex flex-col justify-center gap-7 pr-10  '>
                <nav className='font-semibold text-2xl md:max-w-sm'>
                    Women Empowering, Women & Children ! WEWAC
                </nav>
                <nav className=' flex flex-col gap-10 '>
                    <p>
                        All proceeds from advertisements on this portal are used  to support charitable projects in Ghana.
                    </p>

                    <p>
                        All Projects we support are focused on improving the lives of women and children in Ghana
                    </p>

                    <button className=' bg-primary-light-dark text-primary-light-white p-4 px-7 rounded-full self-start'>
                        Support Us
                    </button>

                </nav>

            </div>
            <div className=' col-span-1'>
                <Image alt="" quality={100} height={500} width={500} src="/images/Rectangle 57.png" />

            </div>
        </section>
    )
}

export default Womenempowering