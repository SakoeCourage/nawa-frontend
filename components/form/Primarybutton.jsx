'use client'
import React from 'react'

function Primarybutton({className,text,onClick,type}) {
  return (
    <button type={type ?? 'button'} onClick={()=> onClick ? onClick() : void(0)} className={`bg-primary-deep-blue text-white px-5 py-3 rounded-md shadow ${className}`}>
        {text}
</button>
  )
}

export default Primarybutton