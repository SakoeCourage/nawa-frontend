'use client'
import React, { useState } from 'react'

function Ratingstars() {
    const [level, setLevel] = useState(0)
    const maxStars = 5
    const [indexhovered, setIndexHovered] = useState(0)

    const styleFilled = {
        color: '#00873C',
        scale: 1.1
    }
    const styleUnFilled = {
        color: '#D9D9D9'
    }
    return (
        <div className=' flex items-center gap-1' onMouseOut={()=>setIndexHovered(0)} >
            {[...new Array(maxStars)].map((star, i) => <svg onMouseOver={()=>setIndexHovered(i +1)} onClick={() => setLevel(i + 1)} key={i} style={level >= (i + 1) ? styleFilled : styleUnFilled} className={`cursor-pointer transform transition-all duration-300 ${i+1 <= indexhovered && ' scale-[1.2]'}`} width="29" height="29" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.0489 1.5424C15.3483 0.621094 16.6517 0.621097 16.9511 1.54241L20.0413 11.0531C20.1751 11.4651 20.5591 11.744 20.9923 11.744H30.9924C31.9611 11.744 32.3639 12.9837 31.5802 13.5531L23.4899 19.431C23.1395 19.6856 22.9928 20.137 23.1267 20.549L26.2169 30.0596C26.5162 30.9809 25.4617 31.7471 24.678 31.1777L16.5878 25.2998C16.2373 25.0451 15.7627 25.0451 15.4122 25.2998L7.32198 31.1777C6.53826 31.7471 5.48378 30.9809 5.78314 30.0596L8.87333 20.549C9.00721 20.137 8.86055 19.6856 8.51006 19.431L0.419821 13.553C-0.363892 12.9836 0.0388863 11.744 1.00761 11.744H11.0077C11.4409 11.744 11.8249 11.4651 11.9587 11.0531L15.0489 1.5424Z" fill="currentColor" />
            </svg>)}
        </div>
    )
}

export default Ratingstars