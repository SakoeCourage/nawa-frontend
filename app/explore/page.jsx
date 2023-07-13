import React from 'react'
import Exploresection from './Exploresection'
import Popularservice from '../partials/Landingpage/Popularservice'


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



