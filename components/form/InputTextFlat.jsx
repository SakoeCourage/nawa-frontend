'use client'
import React from 'react'

function InputTextFlat({ className, placeholder, label, type, value, labelBold, icon,onChange,error }) {
    
    return (
        <nav className={`flex flex-col gap-0 ${className}`}>
            {label && <label htmlFor="" className={`font-normal text-primary-light-gray capitalize text-sm ${labelBold && ' !text-base !text-primary-deep-dark '}`}>{label}</label>}
            <nav className=' w-full flex items-end '>
                {icon &&
                    <nav className='border-b border-alternative-light-dark h-full py-2 pr-5'>
                        {icon}
                    </nav>}
                <input value={value ?? ''} onChange={(e)=>onChange && onChange(e)} type={type ?? 'text'} placeholder={placeholder ?? ' '} className='w-full border-b border-alternative-light-dark bg-inherit focus:outline-none focus:border-b p-1 py-1' name="" id="" />
            </nav>
                {error && <span className="block  w-full text-red-500 text-xs">{error}</span>}
        </nav>

    )
}

export default InputTextFlat