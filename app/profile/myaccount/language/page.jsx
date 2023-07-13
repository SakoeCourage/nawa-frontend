import React from 'react'
import InputTextFlat from '@/components/form/InputTextFlat'
import Primarybutton from '@/components/form/Primarybutton'
import Inputselect from '@/components/form/Inputselect'
import Link from 'next/link'
function page() {
    return (
        <div className=' max-w-5xl mx-auto py-4 text-sm'>
            <nav className=' flex items-center gap-3 text-[#707070]'>
            <Link href='/profile/myaccount'>Account</Link>
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19751 10.1199L5.00084 6.31655C5.45001 5.86738 5.45001 5.13238 5.00084 4.68322L1.19751 0.879883" stroke="#707070" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Language</span>
            </nav>
            <h6 className=' font-medium text-2xl text-[#323232] my-5 mt-10'>
                Language
            </h6>

            <div className=' flex gap-5 lg:flex-row flex-col '>
                <nav className=' w-full grow'>
                    <p className=' text-primary-light-gray text-sm '>
                        Change  account language to any language you are comfortable
                        with
                    </p>

                    <nav className=' flex flex-col gap-10 mt-10'>
                        <Inputselect customSearchEnabled={true} placeholder="Preferred Language" data={[{ value: 'English', label: 'English' }, { value: 'French', label: 'French' }]} />
                    </nav>
                    <nav className=' my-6 flex items-center justify-end'>
                        <Primarybutton className='w-full' text='Save' />
                    </nav>
                </nav>

                <nav className=' flex justify-center lg:justify-end w-full grow'>
                    <nav className=' py-5 px-3 pr-24 rounded-md border-[1px] border-[#FF0000] h-max'>
                        <svg className=' my-5' width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.7291 4.16699H16.2708C8.68746 4.16699 4.16663 8.68783 4.16663 16.2712V33.7087C4.16663 41.3128 8.68746 45.8337 16.2708 45.8337H33.7083C41.2916 45.8337 45.8125 41.3128 45.8125 33.7295V16.2712C45.8333 8.68783 41.3125 4.16699 33.7291 4.16699ZM35.4166 36.3962C31.8541 36.3962 28.5208 34.8545 25.8541 32.0003C22.8333 34.7295 18.8958 36.3962 14.5833 36.3962C13.7291 36.3962 13.0208 35.6878 13.0208 34.8337C13.0208 33.9795 13.7291 33.2712 14.5833 33.2712C21.8125 33.2712 27.7916 27.542 28.5625 20.2087H25H14.6041C13.75 20.2087 13.0416 19.5003 13.0416 18.6462C13.0416 17.792 13.75 17.1045 14.6041 17.1045H23.4375V15.167C23.4375 14.3128 24.1458 13.6045 25 13.6045C25.8541 13.6045 26.5625 14.3128 26.5625 15.167V17.1045H30.0833C30.125 17.1045 30.1666 17.0837 30.2083 17.0837C30.25 17.0837 30.2916 17.1045 30.3333 17.1045H35.3958C36.25 17.1045 36.9583 17.8128 36.9583 18.667C36.9583 19.5212 36.25 20.2295 35.3958 20.2295H31.6875C31.375 23.792 30.0416 27.0628 28 29.7295C30.0833 32.042 32.6875 33.292 35.4166 33.292C36.2708 33.292 36.9791 34.0003 36.9791 34.8545C36.9791 35.7087 36.2708 36.3962 35.4166 36.3962Z" fill="#FF0000" />
                        </svg>

                        <nav className=' text-[#323232] font-semibold text-lg'>
                            Want to change account language?
                        </nav>
                        <span className=' text-primary-light-gray text-sm'>
                            Well we are not limiting you please do.
                        </span>
                    </nav>

                </nav>

            </div>

        </div>
    )
}

export default page