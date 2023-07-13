import React from 'react'
import InputTextFlat from '@/components/form/InputTextFlat'

export function B() {
  return (
    <div className=' max-w-lg mx-auto flex flex-col gap-8 py-7'>
            <nav className=' flex flex-col gap-4'>
                <label htmlFor="" className=' text-base'>
                Do you want to join the Whatsapp group?
                </label>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Yes </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>No </nav>
                </nav>
            </nav>

            <InputTextFlat className="!gap-4" labelBold ={true} label='If you want to be accepted into the Facebook group, please enter Facebook username'/>

            <nav className=' flex flex-col gap-4'>
                <label htmlFor="" className=' text-base'>
                What is the duration of your stay in Ghana?
                </label>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Permanent  </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>I will be here for less than 3 year </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>I will be here for less than a year </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>I am visiting </nav>
                </nav>
                <nav className=' flex items-center gap-3'>
                    <input name="" className=' accent-[#00873C] outline-[#00873C] h-5 w-5' type="radio"  id="" />
                    <nav className=' text-base'>Other </nav>
                </nav>
            </nav>
            <InputTextFlat className="!gap-4" labelBold ={true} label='What country are you from? / What is your nationality?'/>
            <InputTextFlat className="!gap-4" labelBold ={true} label="If you are interested in volunteering or making a donation to support women's wellbeing and empowerment projects around Ghana through NAWA, please include details here."/>
            <InputTextFlat className="!gap-4" labelBold ={true} label="If you would like to start a special interest group (arts and crafts, Bridge, Majong, golf, sports, etc.), please include details here."/>

    </div>
  )
}

export default B