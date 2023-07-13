'use client'
import React, { useEffect, useState } from 'react'
import Inputselect from '@/components/form/Inputselect'
import { categories } from '@/app/explore/Exploresection'
import InputTextBordered from '@/components/form/InputTextBordered'
import { object, string, number, date } from 'yup';
import Primarybutton from '@/components/form/Primarybutton';
import handleValidation from '@/components/form/hooks/handlevalidation'

export function A({ formData, setFormData, handleOnNextStep, isLastStep, handleOnPrevStep, isFirstStep }) {
  const [errors, setErrors] = useState({})

  const schema = object({
    serviceName: string().required('This field is required'),
    serviceDescription: string().required('This field is required'),
    CategoryId: string().required('This field is required'),
    SubCategoryId: string().required('This field is required')
  }
)
  const validateFormData = async() => {
    handleValidation(schema, formData)
      .then(res => {
          handleOnNextStep()
      })
      .catch(err => {
        setErrors(err)
      })


  }



  return (
    <div className=' max-w-lg mx-auto flex flex-col gap-7 py-7'>
      <InputTextBordered error={errors?.serviceName} value={formData?.serviceName} onChange={(e) => setFormData(cv => cv = { ...cv, serviceName: e.target.value })} placeholder="Name of Service" />
      <Inputselect error={errors?.CategoryId} value={formData?.CategoryId} onChange={(e) => setFormData(cv => cv = { ...cv, CategoryId: e.target.value })} placeholder="Select Category" data={[...categories.map((category) => { return ({ label: category, value: category }) })]} />
      <Inputselect error={errors?.SubCategoryId} value={formData?.SubCategoryId} onChange={(e) => setFormData(cv => cv = { ...cv, SubCategoryId: e.target.value })} placeholder="Select sub-category" data={[...categories.map((category) => { return ({ label: category, value: category }) })]} />
      <div>
      <textarea  rows={10} value={formData?.serviceDescription} onChange={(e) => setFormData(cv => cv = { ...cv, serviceDescription: e.target.value })} className=' w-full border-[#888] border rounded-[4px] p-2 focus:outline-none' placeholder='Add a small overview or history about the listing ' />
      {errors?.serviceDescription && <span className="block  w-full text-red-500 text-xs">{errors?.serviceDescription}</span>}
      </div>
      <div className='flex items-center justify-end gap-4'>
        {!isFirstStep && <Primarybutton onClick={() => handleOnPrevStep()} className='!px-10' text="Previous" />}
        <Primarybutton onClick={() => validateFormData()} className='!px-10' text={isLastStep ? 'Done' : 'Next'} />
      </div>
    </div>
  )
}

export default A