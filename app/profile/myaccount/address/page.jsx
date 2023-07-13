"use client"
import React from 'react'
import InputTextFlat from '@/components/form/InputTextFlat'
import Primarybutton from '@/components/form/Primarybutton'
import Link from 'next/link'
 function page() {
    return (
        <div className=' max-w-5xl mx-auto py-4 text-sm'>
            <nav className=' flex items-center gap-3 text-[#707070]'>
                <Link href='/profile/myaccount'>Account</Link>
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19751 10.1199L5.00084 6.31655C5.45001 5.86738 5.45001 5.13238 5.00084 4.68322L1.19751 0.879883" stroke="#707070" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Address</span>
            </nav>
            <h6 className=' font-medium text-2xl text-[#323232] my-5 mt-10'>
                Address
            </h6>

            <div className=' flex gap-5 lg:flex-row flex-col '>
                <nav className=' w-full grow'>
                    <p className=' text-primary-light-gray text-sm '>
                        Please enter the address used on your credit card, this
                        would be used when billing
                    </p>

                    <nav className=' flex flex-col gap-10 mt-10'>
                        <InputTextFlat label='Legal Name' />
                        <InputTextFlat type="address" label='Address' />
                        <InputTextFlat type="city" label='City' />
                        <InputTextFlat type="state" label='State' />
                        <InputTextFlat type="zipcode" label='Zip code' />

                    </nav>
                    <nav className=' my-6 flex items-center justify-end'>
                        <Primarybutton className='w-full' text='Save' />
                    </nav>
                </nav>

                <nav className=' flex justify-center lg:justify-end w-full grow'>
                    <nav className=' py-5 px-3 pr-24 rounded-md border-[1px] border-[#FF0000] h-max'>
                        <svg width="43" height="43" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M45.8333 47.396H4.16666C3.31249 47.396 2.60416 46.6877 2.60416 45.8335C2.60416 44.9793 3.31249 44.271 4.16666 44.271H45.8333C46.6875 44.271 47.3958 44.9793 47.3958 45.8335C47.3958 46.6877 46.6875 47.396 45.8333 47.396Z" fill="#FF0000" />
                            <path d="M7.70874 45.8337H4.58374L4.68791 20.7711C4.68791 19.0003 5.50041 17.3545 6.89624 16.2712L21.4796 4.91699C23.5421 3.31283 26.4379 3.31283 28.5212 4.91699L43.1046 16.2503C44.4796 17.3337 45.3129 19.0211 45.3129 20.7711V45.8337H42.1879V20.792C42.1879 20.0003 41.8129 19.2295 41.1879 18.7295L26.6046 7.39616C25.6671 6.667 24.3546 6.667 23.3962 7.39616L8.8129 18.7504C8.1879 19.2295 7.81291 20.0003 7.81291 20.792L7.70874 45.8337Z" fill="#FF0000" />
                            <path d="M30.2083 47.3962H19.7917C18.9375 47.3962 18.2292 46.6878 18.2292 45.8337V38.542C18.2292 35.9587 20.3333 33.8545 22.9167 33.8545H27.0833C29.6667 33.8545 31.7708 35.9587 31.7708 38.542V45.8337C31.7708 46.6878 31.0625 47.3962 30.2083 47.3962ZM21.3542 44.2712H28.6458V38.542C28.6458 37.6878 27.9375 36.9795 27.0833 36.9795H22.9167C22.0625 36.9795 21.3542 37.6878 21.3542 38.542V44.2712Z" fill="#FF0000" />
                            <path d="M19.7917 30.2087H15.625C13.625 30.2087 11.9792 28.5628 11.9792 26.5628V23.4378C11.9792 21.4378 13.625 19.792 15.625 19.792H19.7917C21.7917 19.792 23.4375 21.4378 23.4375 23.4378V26.5628C23.4375 28.5628 21.7917 30.2087 19.7917 30.2087ZM15.625 22.917C15.3333 22.917 15.1042 23.1462 15.1042 23.4378V26.5628C15.1042 26.8545 15.3333 27.0837 15.625 27.0837H19.7917C20.0833 27.0837 20.3125 26.8545 20.3125 26.5628V23.4378C20.3125 23.1462 20.0833 22.917 19.7917 22.917H15.625Z" fill="#FF0000" />
                            <path d="M34.375 30.2087H30.2083C28.2083 30.2087 26.5625 28.5628 26.5625 26.5628V23.4378C26.5625 21.4378 28.2083 19.792 30.2083 19.792H34.375C36.375 19.792 38.0208 21.4378 38.0208 23.4378V26.5628C38.0208 28.5628 36.375 30.2087 34.375 30.2087ZM30.2083 22.917C29.9167 22.917 29.6875 23.1462 29.6875 23.4378V26.5628C29.6875 26.8545 29.9167 27.0837 30.2083 27.0837H34.375C34.6667 27.0837 34.8958 26.8545 34.8958 26.5628V23.4378C34.8958 23.1462 34.6667 22.917 34.375 22.917H30.2083Z" fill="#FF0000" />
                            <path d="M39.5835 16.1455C38.7293 16.1455 38.021 15.458 38.021 14.6039L37.9793 9.89551H30.3752C29.521 9.89551 28.8127 9.18717 28.8127 8.33301C28.8127 7.47884 29.521 6.77051 30.3752 6.77051H39.5418C40.396 6.77051 41.1043 7.45799 41.1043 8.31215L41.1668 14.5622C41.146 15.4372 40.4585 16.1455 39.5835 16.1455C39.6043 16.1455 39.5835 16.1455 39.5835 16.1455Z" fill="#FF0000" />
                        </svg>


                        <nav className=' text-[#323232] font-semibold text-lg mt-5'>
                            Why do you need my Address
                        </nav>
                        <span className=' text-primary-light-gray text-sm'>
                            Your address will be used for contacting and billing.
                        </span>
                    </nav>

                </nav>

            </div>

        </div>
    )
}

export default page