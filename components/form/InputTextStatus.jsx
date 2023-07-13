'use client'
import React,{useEffect, useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import InputTextFlat from './InputTextFlat'

function Tel(props) {
    const [value, setValue] = useState(props.value)
    return   <PhoneInput  inputClass=' !w-full !py-2'
    enableSearch
    country={'gh'}
    value={value}
    onChange={value =>setValue(value)}
  />
}
function Email(props) {  
   return  <InputTextFlat {...props} type='email'/>
}


const components = {
    Tel: Tel,
    Email: Email
}

function InputTextStatus({ icon, value, status, mode = "View", component = "Email",label }, props) {
    const [curMode, setCurrMode] = useState(mode)
    const Component = components[component]
    return (
        <>
            {curMode === "Edit" ? <Component label={label} value={value}  />
                :
                <nav className="flex items-center border rounded-md p-4 justify-between">
                    <nav className=' flex items-center gap-5'>
                        <nav className='p-1 rounded-full bg-[#00F86E]'>
                            {icon}
                        </nav>
                        <nav className='flex flex-col gap-1'>
                            <nav className=' '>{value}</nav>
                            <nav className=' text-primary-light-gray text-xs'>{status}</nav>
                        </nav>
                    </nav>
                    <button onClick={()=>setCurrMode(cv => cv === "View" ? 'Edit': 'View')}>
                        <u className='font-medium'>Edit</u>
                    </button>
                </nav>
        }
        </>
    )
}

export default InputTextStatus