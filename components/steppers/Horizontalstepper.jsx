"use client"
import React, { Component, useEffect, useMemo, useState } from 'react'

function Horizontalstepper({ steps, onComplete, currentData }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [formData, setFormData] = useState({ ...currentData })
  const Component = steps[currentIndex]?.component
  const Title = steps[currentIndex]?.title
  const Caption = steps[currentIndex]?.caption

  const isLastStep = useMemo(() => currentIndex + 1 === steps?.length, [currentIndex])
  const isFirstStep = useMemo(() => currentIndex + 1 === 1, [currentIndex])

  const handleOnNextStep = () => {
    if (!(isLastStep)) {
      setCurrentIndex(ci => ci = ci + 1)
    } else {
      onComplete && onComplete()
    }
  }
  const handleOnPrevStep = () => !isFirstStep && setCurrentIndex(ci => ci = ci - 1)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [currentIndex])

  return (
    <div className='py-5 h-full'>
      <div className=' min-h-[50vh]'>
        <nav className=' flex flex-col items-center gap-3 '>
          <h6 className=' font-medium text-xl text-alternative-light-dark'>{Title}</h6>
          <p className='  text-alternative-light-dark max-w-lg text-center '>{Caption}</p>
        </nav>
        <Component
          isFirstStep={isFirstStep}
          handleOnPrevStep={handleOnPrevStep}
          isLastStep={isLastStep}
          handleOnNextStep={() => handleOnNextStep()}
          formData={formData}
          setFormData={setFormData} />
      </div>
    </div>
  )
}

export default Horizontalstepper