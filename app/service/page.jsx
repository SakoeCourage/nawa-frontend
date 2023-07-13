import React from 'react'
import { Searchbar } from '../partials/Landingpage/Hero'
import Imagecarousel from '@/components/carousels/Imagecarousel'
import { services } from '@/components/carousels/Popluarservicecarousel'
import Servicedetails from './partials/Servicedetails'
import Serviceabout from './partials/Serviceabout'
import Servicecontenthead from './partials/Servicecontenthead'
import Servicereviews from './partials/Servicereviews'
import Popluarservicecarousel from '@/components/carousels/Popluarservicecarousel'




function page() {
  
  return (
    <div className=' bg-primary-deep-blue pt-[var(--headerHeight)]'>
      <div className=' bg-white '>
        <Imagecarousel services={services} />
        <div className='max-w-6xl mx-auto mb-16'>
          <Servicecontenthead />
          <Servicedetails />
          <Serviceabout />
          <Servicereviews />
          <Popluarservicecarousel />
        </div>
      </div>
    </div>
  )
}

export default page