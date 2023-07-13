import React from 'react'
import { Searchbar } from '../partials/Landingpage/Hero'
import Exploresection from './Exploresection'
import Popularservice from '../partials/Landingpage/Popularservice'
import Api from '@/api/api'
import Cookies from 'js-cookie'
import getToken from '@/api/getToken'
import { getSession } from 'next-auth/react';

export default function page() {
  
    return (
        <div className=' bg-primary-deep-blue pt-[var(--headerHeight)]'>
        
            <div className=' bg-white'>
                <Exploresection />
                <Popularservice />
            </div>
        </div>
    )
}



