import React from 'react'


export function D() {
  return (
    <div className='max-w-lg mx-auto flex flex-col gap-8 py-7 min-h-full'>
      <nav className='h-full w-full flex flex-col items-center gap-7'>
        <svg width="55" height="54" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" width="64" height="64" rx="32" fill="#23B35F" />
          <path d="M48.5 21L26.5 43L16.5 33" stroke="#FCFCFC" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <nav className=' font-semibold text-lg '>
          Congratulations
        </nav>
        <nav className=' text-center'>
          You have successfully submitted your forms, we will contact you on example@gmail.com
        </nav>
      </nav>
    </div>
  )
}

export default D