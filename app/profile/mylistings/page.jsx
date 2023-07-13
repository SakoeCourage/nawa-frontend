import React from 'react'
import Listings from './Listings'
import Image from 'next/image'
function page() {
  return (
    <div className=' h-full pb-72'>
      <div className=' max-w-7xl mx-auto py-7'>
        <nav className=' flex flex-col gap-7 mb-10'>
          <h6 className=' font-semibold text-3xl text-alternative-light-dark'>
            Welcome, Lena
          </h6>
          <nav>
            <p>Create a listing and have users find your services faster -   <u className=' text-[#2320FB]'>Add new listing now</u> </p>
          </nav>
        </nav>

        <nav className=' p-3 rounded-md border-2 flex flex-col gap-4 w-max mb-20'>
          <span className=' text-alternative-light-dark font-medium'>
            Activate Account
          </span>
          <nav className=' flex items-center justify-between gap-20 '>
            <span className=' text-xs text-[#FF0000]'>Required to publish listing </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9V14" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.9999 21.41H5.93993C2.46993 21.41 1.01993 18.93 2.69993 15.9L5.81993 10.28L8.75993 5.00003C10.5399 1.79003 13.4599 1.79003 15.2399 5.00003L18.1799 10.29L21.2999 15.91C22.9799 18.94 21.5199 21.42 18.0599 21.42H11.9999V21.41Z" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.9946 17H12.0036" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </nav>
          <u className=' text-alternative-light-dark font-medium text-xs'>
            Start
          </u>
        </nav>
        <Listings />
      </div>

      <div className='help-and-tips h-[60vh] '>
        <div className=' max-w-7xl mx-auto'>
          <nav className=' text-alternative-light-dark  py-10'>
            <h6 className=' font-semibold text-lg '>
              Help and Tips
            </h6>
            <p className=' mt-4 text-sm'>
              With these tips you should be able to create a successful listing and get it featured.
            </p>
          </nav>
          <div className=' grid grid-cols-2 gap-5 mt-10'>
          <nav className="rounded-2xl flex flex-col border-2 bg-white">
            <nav className=' object-cover'>
              <Image alt={''} src='/images/tip1.png' width={500} height={500} className=' w-full h-full ' quality={100} />
            </nav>
            <nav>
              <p className=' w-full text-center text-alternative-light-dark font-medium text-lg p-5'>How to make your listing stand out</p>
            </nav>
          </nav>
          <nav className="rounded-2xl flex flex-col border-2 bg-white">
            <nav className=' object-cover'>
              <Image alt={''} src='/images/tip2.png' width={500} height={500} className=' w-full h-full ' quality={100} />
            </nav>
            <nav>
              <p className=' w-full text-center text-alternative-light-dark font-medium text-lg p-5'>Taking great photos for your listing </p>
            </nav>
          </nav>
        </div>
        </div>
    
      </div>

    </div>

  )
}

export default page