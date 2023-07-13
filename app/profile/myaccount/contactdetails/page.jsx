"use client"
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
                            Phone
                        </h6>
                        <button className="flex items-center border rounded-md p-4 gap-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#1B1B1B" />
                                <path d="M8.40015 12H15.6001" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15.5999V8.3999" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span>Add a new number</span>
                        </button>
                        <InputTextStatus component='Tel' value='+233 203 843 143' status='Verified' icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7891 14.9453C17.7891 15.2266 17.7266 15.5156 17.5937 15.7969C17.4609 16.0781 17.2891 16.3437 17.0625 16.5937C16.6797 17.0156 16.2578 17.3203 15.7812 17.5156C15.3125 17.7109 14.8047 17.8125 14.2578 17.8125C13.4609 17.8125 12.6094 17.625 11.7109 17.2422C10.8125 16.8594 9.91406 16.3437 9.02344 15.6953C8.125 15.0391 7.27344 14.3125 6.46094 13.5078C5.65625 12.6953 4.92969 11.8437 4.28125 10.9531C3.64062 10.0625 3.125 9.17187 2.75 8.28906C2.375 7.39844 2.1875 6.54687 2.1875 5.73437C2.1875 5.20312 2.28125 4.69531 2.46875 4.22656C2.65625 3.75 2.95313 3.3125 3.36719 2.92187C3.86719 2.42969 4.41406 2.1875 4.99219 2.1875C5.21094 2.1875 5.42969 2.23438 5.625 2.32813C5.82813 2.42188 6.00781 2.5625 6.14844 2.76562L7.96094 5.32031C8.10156 5.51562 8.20312 5.69531 8.27344 5.86719C8.34375 6.03125 8.38281 6.19531 8.38281 6.34375C8.38281 6.53125 8.32813 6.71875 8.21875 6.89844C8.11719 7.07812 7.96875 7.26562 7.78125 7.45312L7.1875 8.07031C7.10156 8.15625 7.0625 8.25781 7.0625 8.38281C7.0625 8.44531 7.07031 8.5 7.08594 8.5625C7.10938 8.625 7.13281 8.67187 7.14844 8.71875C7.28906 8.97656 7.53125 9.3125 7.875 9.71875C8.22656 10.125 8.60156 10.5391 9.00781 10.9531C9.42969 11.3672 9.83594 11.75 10.25 12.1016C10.6562 12.4453 10.9922 12.6797 11.2578 12.8203C11.2969 12.8359 11.3437 12.8594 11.3984 12.8828C11.4609 12.9062 11.5234 12.9141 11.5937 12.9141C11.7266 12.9141 11.8281 12.8672 11.9141 12.7812L12.5078 12.1953C12.7031 12 12.8906 11.8516 13.0703 11.7578C13.25 11.6484 13.4297 11.5937 13.625 11.5937C13.7734 11.5937 13.9297 11.625 14.1016 11.6953C14.2734 11.7656 14.4531 11.8672 14.6484 12L17.2344 13.8359C17.4375 13.9766 17.5781 14.1406 17.6641 14.3359C17.7422 14.5312 17.7891 14.7266 17.7891 14.9453Z" stroke="#1B1B1B" stroke-width="1.5" stroke-miterlimit="10" />
                        </svg>
                        } />
                    </nav>
                    <nav className="flex flex-col gap-5 my-7 mt-10">
                        <h6 className=' font-medium text-lg text-[#323232] '>
                            Email
                        </h6>
                        <button className="flex items-center border rounded-md p-4 gap-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#1B1B1B" />
                                <path d="M8.40015 12H15.6001" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 15.5999V8.3999" stroke="#FEFEFE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                            <span>Add a new email</span>
                        </button>
                        <InputTextStatus type="Emaiil" label="Email" placeholder="Example@gmail.com" value='Example@gmail.com' status='Verified' icon={<svg width="20" height="20" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                            <path d="M23.0208 31.1462L19.1666 35.0003C18.3541 35.8128 17.0625 35.8128 16.2291 35.0212C16 34.792 15.7708 34.5837 15.5416 34.3545C13.3958 32.1878 11.4583 29.917 9.72913 27.542C8.02079 25.167 6.64579 22.792 5.64579 20.4378C4.66663 18.0628 4.16663 15.792 4.16663 13.6253C4.16663 12.2087 4.41663 10.8545 4.91663 9.60449C5.41663 8.33366 6.20829 7.16699 7.31246 6.12533C8.64579 4.81283 10.1041 4.16699 11.6458 4.16699C12.2291 4.16699 12.8125 4.29199 13.3333 4.54199C13.875 4.79199 14.3541 5.16699 14.7291 5.70866L19.5625 12.5212C19.9375 13.042 20.2083 13.5212 20.3958 13.9795C20.5833 14.417 20.6875 14.8545 20.6875 15.2503C20.6875 15.7503 20.5416 16.2503 20.25 16.7295C19.9791 17.2087 19.5833 17.7087 19.0833 18.2087L17.5 19.8545C17.2708 20.0837 17.1666 20.3545 17.1666 20.6878C17.1666 20.8545 17.1875 21.0003 17.2291 21.167C17.2916 21.3337 17.3541 21.4587 17.3958 21.5837C17.7708 22.2712 18.4166 23.167 19.3333 24.2503C20.2708 25.3337 21.2708 26.4378 22.3541 27.542C22.5625 27.7503 22.7916 27.9587 23 28.167C23.8333 28.9795 23.8541 30.3128 23.0208 31.1462Z" fill="#FF0000" />
                            <path d="M45.7708 38.1875C45.7708 38.7708 45.6667 39.375 45.4583 39.9583C45.3958 40.125 45.3333 40.2917 45.25 40.4583C44.8958 41.2083 44.4375 41.9167 43.8333 42.5833C42.8125 43.7083 41.6875 44.5208 40.4167 45.0417C40.3958 45.0417 40.375 45.0625 40.3542 45.0625C39.125 45.5625 37.7917 45.8333 36.3542 45.8333C34.2292 45.8333 31.9583 45.3333 29.5625 44.3125C27.1667 43.2917 24.7708 41.9167 22.3958 40.1875C21.5833 39.5833 20.7708 38.9792 20 38.3333L26.8125 31.5208C27.3958 31.9583 27.9167 32.2917 28.3542 32.5208C28.4583 32.5625 28.5833 32.625 28.7292 32.6875C28.8958 32.75 29.0625 32.7708 29.25 32.7708C29.6042 32.7708 29.875 32.6458 30.1042 32.4167L31.6875 30.8542C32.2083 30.3333 32.7083 29.9375 33.1875 29.6875C33.6667 29.3958 34.1458 29.25 34.6667 29.25C35.0625 29.25 35.4792 29.3333 35.9375 29.5208C36.3958 29.7083 36.875 29.9792 37.3958 30.3333L44.2917 35.2292C44.8333 35.6042 45.2083 36.0417 45.4375 36.5625C45.6458 37.0833 45.7708 37.6042 45.7708 38.1875Z" fill="#FF0000" />
                        </svg>


                        <nav className=' text-[#323232] font-semibold text-lg'>
                            Why do you need my Contacts
                        </nav>
                        <span className=' text-primary-light-gray text-sm'>
                            This helps us keep your account safe and reach you if there
                            is any suspicious activity
                        </span>
                    </nav>

                </nav>

            </div>

        </div>
    )
}

export default page