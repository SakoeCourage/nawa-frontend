'use client'
import React, { useState, useEffect } from 'react'
import Inputselect from '@/components/form/Inputselect'
import { categories } from '@/app/explore/Exploresection'
import InputTextBordered from '@/components/form/InputTextBordered'
import { object, string, number, date } from 'yup';
import Primarybutton from '@/components/form/Primarybutton';
import handleValidation from '@/components/form/hooks/handlevalidation'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export function B({ formData, setFormData, handleOnNextStep, isLastStep, handleOnPrevStep, isFirstStep }) {
  const [errors, setErrors] = useState({})

  const schema = object({
    contactNumber: string().required('This field is required'),
    whatsappNumber: string().notRequired().nullable(),
    location: string().notRequired()
  }
  )
  const validateFormData = async () => {
    handleValidation(schema, formData)
      .then(res => {
        handleOnNextStep()
      })
      .catch(err => {
        setErrors(err)
      })


  }


  useEffect(() => {
    console.log(formData)
  }, [formData])
  return (
    <div className=' max-w-lg mx-auto flex flex-col gap-7 py-7'>
      <div>
      <PhoneInput inputClass=' !w-full !py-2'
        value={formData?.contactNumber}
        placeholder='Phone Number'
        country={'gh'}
        onChange={value => setFormData(cv => cv = { ...cv, contactNumber: value })}
      />
        {errors?.contactNumber && <span className="block  w-full text-red-500 text-xs">{errors?.contactNumber}</span>}

      </div>
      <div>
      <PhoneInput inputClass=' !w-full !py-2'
        value={formData?.whatsappNumber}
        placeholder='Whatsapp Number'
        country={'gh'}
        onChange={value => setFormData(cv => cv = { ...cv, whatsappNumber: value })}
      />
        {errors?.whatsappNumber && <span className="block  w-full text-red-500 text-xs">{errors?.whatsappNumber}</span>}

      </div>
      <h1>Add Your Location</h1>
      <div className=' border rounded-[4px] border-[#888] h-32'>
        Location servie map here
      </div>
      <div className='flex items-center justify-end gap-4'>
        {!isFirstStep && <Primarybutton onClick={() => handleOnPrevStep()} className='!px-10' text="Previous" />}
        <Primarybutton onClick={() => validateFormData()} className='!px-10' text={isLastStep ? 'Done' : 'Next'} />
      </div>
    </div>
  )
}

export default B