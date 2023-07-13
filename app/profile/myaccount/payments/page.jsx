import React from 'react'
import Primarybutton from '@/components/form/Primarybutton'
import InputTextStatus from '@/components/form/InputTextStatus'
import Link from 'next/link'
function page() {
    return (
        <div className=' max-w-5xl mx-auto py-4 text-sm'>
            <nav className=' flex items-center gap-3 text-[#707070]'>
                <Link href='/profile/myaccount'>Account</Link>
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19751 10.1199L5.00084 6.31655C5.45001 5.86738 5.45001 5.13238 5.00084 4.68322L1.19751 0.879883" stroke="#707070" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Contact Details</span>
            </nav>
            <h6 className=' font-medium text-2xl text-[#323232] my-5 mt-10'>
                Contact Details
            </h6>

            <div className=' flex gap-20 lg:flex-row flex-col '>
                <nav className=' w-full grow'>
                    <p className=' text-primary-light-gray text-sm '>
                        This helps us contact you, this will contain your email and phone number and your address as well.
                    </p>

                    <nav className="flex flex-col gap-5 my-7">
                        <h6 className=' font-medium text-xl text-[#323232] '>
                            Personal Details
                        </h6>
                        <nav className="flex items-center border rounded-md p-4 justify-between">
                            <nav className=' text-primary-light-gray'>
                                <nav className=' mb-1'>Lena Ablah</nav>
                                <nav className=' truncate'>29356 Vera St Gold Beach, Oregon(OR),</nav>
                            </nav>
                            <nav>
                                <u className='font-medium'>Edit</u>
                            </nav>
                        </nav>
                    </nav>
                    <nav className="flex flex-col gap-5 my-7 mt-10">
                        <h6 className=' font-medium text-lg text-[#323232] '>
                            Payment Method
                        </h6>
                        <button className="flex items-center border rounded-md p-4 gap-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#1B1B1B" />
                                <path d="M8.40015 12H15.6001" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15.5999V8.3999" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                            <span>Add a new payment method</span>
                        </button>
                        <InputTextStatus component='Tel' value='+233 203 843 143' status='Verified' icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.66675 7.0835H11.2501" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 13.75H6.66667" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.75 13.75H12.0833" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.3334 10.0248V13.4248C18.3334 16.3498 17.5917 17.0832 14.6334 17.0832H5.36675C2.40841 17.0832 1.66675 16.3498 1.66675 13.4248V6.57484C1.66675 3.64984 2.40841 2.9165 5.36675 2.9165H11.2501" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13.75 5.2085H18.3333" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M16.0417 7.49984V2.9165" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" />
                        </svg>

                        } />
                    </nav>

                    <nav className=' my-6 flex items-center flex-col gap-2 justify-end'>
                        <Primarybutton className='w-full' text='Save' />
                        <button className=' text-alternative-light-dark font-medium border-2 w-full px-5 py-3 rounded-md  '>
                            Cancel Subscription
                        </button>
                    </nav>
                </nav>

                <nav className=' flex justify-center lg:justify-end w-full grow'>
                    <nav className=' py-5 px-3 pr-10 rounded-md border-[1px] border-[#FF0000] h-max'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16675 26.2705H39.5834" stroke="#FF0000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M39.5834 21.4163V36.3122C39.5209 42.2497 37.8959 43.7497 31.7084 43.7497H12.0418C5.75014 43.7497 4.16675 42.1872 4.16675 35.9788V21.4163C4.16675 15.7913 5.47925 13.9788 10.4167 13.6872C10.9167 13.6663 11.4585 13.6455 12.0418 13.6455H31.7084C38 13.6455 39.5834 15.208 39.5834 21.4163Z" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M45.8334 14.0208V28.5833C45.8334 34.2083 44.5209 36.0208 39.5834 36.3125V21.4167C39.5834 15.2083 38 13.6458 31.7084 13.6458H12.0418C11.4585 13.6458 10.9167 13.6667 10.4167 13.6875C10.4792 7.75 12.1043 6.25 18.2918 6.25H37.9584C44.25 6.25 45.8334 7.8125 45.8334 14.0208Z" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10.9375 37.104H14.5208" stroke="#FF0000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.9792 37.104H26.1459" stroke="#FF0000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <nav className=' text-[#323232] font-semibold text-lg mt-5'>
                            Subscriptions?
                        </nav>
                        <span className=' text-primary-light-gray text-sm'>
                            Subscribe to explore all our features and have access to
                            all services across the country
                        </span>
                    </nav>

                </nav>

            </div>

        </div>
    )
}

export default page