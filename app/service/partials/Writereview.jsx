import React from 'react'
import Primarybutton from '@/components/form/Primarybutton'


import Ratingstars from '@/components/form/Ratingstars'


function Writereview() {
  return (
    <div>
      <h6 className=' text-base font-semibold mb-2'>
        Write your review
      </h6>
      <Ratingstars />

      <form className=' mt-8 flex flex-col gap-5'>
        <nav className=' flex flex-col gap-4'>
          <label htmlFor="" className=' font-semibold text-primary-light-dark'>Title</label>
          <input className=' border-2 p-4 rounded-md' type="text" name="" id="" placeholder='What best describes your experience' />
        </nav>
        <nav className=' flex flex-col gap-4'>
          <label htmlFor="" className=' font-semibold text-primary-light-dark'>Review</label>
          <textarea rows={10} className=' border-2 p-4 rounded-md' type="text" name="" id="" placeholder='Please share your experience here' />
        </nav>
        <Primarybutton className='w-max self-end' text="Publish Review"/>
      </form>
    </div>
  )
}

export default Writereview