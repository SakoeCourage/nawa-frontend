"use client"
import React from 'react'

function InputTextBordered({className,placeholder,label,type,value,onChange,error}) {

    return (
        <nav className={`flex flex-col gap-0 ${className}`}>
           {label && <label htmlFor="" className=' font-normal text-primary-light-gray capitalize text-sm'>{label}</label>}
            <nav className=' w-full '>
                <input value={value ?? ''} type={type ?? 'text'} onChange={(e)=>onChange && onChange(e)} placeholder={placeholder ?? ' '} className='w-full h-[var(--inputH)] border rounded-[4px] border-[#888] bg-inherit focus:outline-none focus:border-b p-1 py-1 px-2'  name="" id="" />
            </nav>
            {error && <span className="block  w-full text-red-500 text-xs">{error}</span>}
        </nav>

    )
}

export default InputTextBordered