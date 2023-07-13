"use client"
import React from 'react'
import InputTextFlat from '@/components/form/InputTextFlat'
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
                <span>Security & Recovery</span>
            </nav>
            <h6 className=' font-medium text-2xl text-[#323232] my-5 mt-10'>
                Security
            </h6>

            <div className=' flex gap-20 lg:flex-row flex-col '>
                <nav className=' w-full grow'>
                    <p className=' text-primary-light-gray text-sm '>
                        secure your account by adding your phone number, email and a
                        recovery email.
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
                            Add Recovery Phone
                        </h6>
                        {/* <button className="flex items-center border rounded-md p-4 gap-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#1B1B1B" />
                                <path d="M8.40015 12H15.6001" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15.5999V8.3999" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span>Add a new number</span>
                        </button> */}
                        <InputTextStatus mode='Edit' component='Tel' value='+233 203 843 143' status='Verified' icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7891 14.9453C17.7891 15.2266 17.7266 15.5156 17.5937 15.7969C17.4609 16.0781 17.2891 16.3437 17.0625 16.5937C16.6797 17.0156 16.2578 17.3203 15.7812 17.5156C15.3125 17.7109 14.8047 17.8125 14.2578 17.8125C13.4609 17.8125 12.6094 17.625 11.7109 17.2422C10.8125 16.8594 9.91406 16.3437 9.02344 15.6953C8.125 15.0391 7.27344 14.3125 6.46094 13.5078C5.65625 12.6953 4.92969 11.8437 4.28125 10.9531C3.64062 10.0625 3.125 9.17187 2.75 8.28906C2.375 7.39844 2.1875 6.54687 2.1875 5.73437C2.1875 5.20312 2.28125 4.69531 2.46875 4.22656C2.65625 3.75 2.95313 3.3125 3.36719 2.92187C3.86719 2.42969 4.41406 2.1875 4.99219 2.1875C5.21094 2.1875 5.42969 2.23438 5.625 2.32813C5.82813 2.42188 6.00781 2.5625 6.14844 2.76562L7.96094 5.32031C8.10156 5.51562 8.20312 5.69531 8.27344 5.86719C8.34375 6.03125 8.38281 6.19531 8.38281 6.34375C8.38281 6.53125 8.32813 6.71875 8.21875 6.89844C8.11719 7.07812 7.96875 7.26562 7.78125 7.45312L7.1875 8.07031C7.10156 8.15625 7.0625 8.25781 7.0625 8.38281C7.0625 8.44531 7.07031 8.5 7.08594 8.5625C7.10938 8.625 7.13281 8.67187 7.14844 8.71875C7.28906 8.97656 7.53125 9.3125 7.875 9.71875C8.22656 10.125 8.60156 10.5391 9.00781 10.9531C9.42969 11.3672 9.83594 11.75 10.25 12.1016C10.6562 12.4453 10.9922 12.6797 11.2578 12.8203C11.2969 12.8359 11.3437 12.8594 11.3984 12.8828C11.4609 12.9062 11.5234 12.9141 11.5937 12.9141C11.7266 12.9141 11.8281 12.8672 11.9141 12.7812L12.5078 12.1953C12.7031 12 12.8906 11.8516 13.0703 11.7578C13.25 11.6484 13.4297 11.5937 13.625 11.5937C13.7734 11.5937 13.9297 11.625 14.1016 11.6953C14.2734 11.7656 14.4531 11.8672 14.6484 12L17.2344 13.8359C17.4375 13.9766 17.5781 14.1406 17.6641 14.3359C17.7422 14.5312 17.7891 14.7266 17.7891 14.9453Z" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" />
                        </svg>
                        } />
                    </nav>
                    <nav className="flex flex-col gap-5 my-7 mt-10">
                        <h6 className=' font-medium text-lg text-[#323232] '>
                            Add Recovery Email
                        </h6>
                        {/* <button className="flex items-center border rounded-md p-4 gap-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#1B1B1B" />
                                <path d="M8.40015 12H15.6001" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15.5999V8.3999" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span>Add a new email</span>
                        </button> */}
                        <InputTextStatus mode='Edit' type="Email" label="Email" placeholder="Example@gmail.com" value='Example@gmail.com' status='Verified' icon={<svg width="20" height="20" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.875 3.75L9.375 8.4375L1.875 3.75V1.875L9.375 6.5625L16.875 1.875V3.75ZM16.875 0H1.875C0.834375 0 0 0.834375 0 1.875V13.125C0 13.6223 0.197544 14.0992 0.549175 14.4508C0.900806 14.8025 1.37772 15 1.875 15H16.875C17.3723 15 17.8492 14.8025 18.2008 14.4508C18.5525 14.0992 18.75 13.6223 18.75 13.125V1.875C18.75 0.834375 17.9063 0 16.875 0Z" fill="#1B1B1B" />
                        </svg>

                        } />
                    </nav>
                    <nav className=' my-6 flex items-center justify-end'>
                        <Primarybutton className='w-full' text='Save' />
                    </nav>
                </nav>

                <nav className=' flex justify-center lg:justify-end w-full grow'>
                    <nav className=' py-5 px-3 pr-10 rounded-md border-[1px] border-[#FF0000] h-max'>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.5625 23.167V14.0212C43.5625 12.3128 42.2708 10.3753 40.6667 9.72949L29.0625 4.97949C26.4583 3.91699 23.5208 3.91699 20.9167 4.97949L9.3125 9.72949C7.72917 10.3753 6.4375 12.3128 6.4375 14.0212V23.167C6.4375 33.3545 13.8333 42.8962 23.9375 45.6878C24.625 45.8753 25.375 45.8753 26.0625 45.6878C36.1667 42.8962 43.5625 33.3545 43.5625 23.167ZM26.5625 26.8128V32.292C26.5625 33.1462 25.8542 33.8545 25 33.8545C24.1458 33.8545 23.4375 33.1462 23.4375 32.292V26.8128C21.3333 26.1462 19.7917 24.1878 19.7917 21.8753C19.7917 19.0003 22.125 16.667 25 16.667C27.875 16.667 30.2083 19.0003 30.2083 21.8753C30.2083 24.2087 28.6667 26.1462 26.5625 26.8128Z" fill="#FF0000" />
                        </svg>


                        <nav className=' text-[#323232] font-semibold text-lg mt-5'>
                            Account Recovery?
                        </nav>
                        <span className=' text-primary-light-gray text-sm'>
                            Add a phone number or an additional email address for
                            recovery incase you cant use your previous one.
                        </span>
                    </nav>

                </nav>

            </div>

        </div>
    )
}

export default page