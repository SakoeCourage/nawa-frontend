'use client'
import React, { useEffect, useState } from 'react'
import GridComponent from '@/components/imagegrid/GridComponent'
import Imageuploadcomponent from '@/components/imagegrid/Imageuploadcomponent'
import { object, string, number, date, array } from 'yup';
import Primarybutton from '@/components/form/Primarybutton';
import handleValidation from '@/components/form/hooks/handlevalidation'
import { Cloudinary } from 'cloudinary-core';
import axios from 'axios';

const Bannerbuttonsubmit = () => {
    return <button className="border-2 my-10 max-w-md mx-auto rounded-md overflow-hidden flex items-center justify-center h-full w-full  aspect-square  ">
        <nav className=' flex flex-col items-center gap-2'>
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0002 0C7.81683 0 0.333496 7.48333 0.333496 16.6667C0.333496 25.85 7.81683 33.3333 17.0002 33.3333C26.1835 33.3333 33.6668 25.85 33.6668 16.6667C33.6668 7.48333 26.1835 0 17.0002 0ZM23.6668 17.9167H18.2502V23.3333C18.2502 24.0167 17.6835 24.5833 17.0002 24.5833C16.3168 24.5833 15.7502 24.0167 15.7502 23.3333V17.9167H10.3335C9.65016 17.9167 9.0835 17.35 9.0835 16.6667C9.0835 15.9833 9.65016 15.4167 10.3335 15.4167H15.7502V10C15.7502 9.31667 16.3168 8.75 17.0002 8.75C17.6835 8.75 18.2502 9.31667 18.2502 10V15.4167H23.6668C24.3502 15.4167 24.9168 15.9833 24.9168 16.6667C24.9168 17.35 24.3502 17.9167 23.6668 17.9167Z" fill="black" />
            </svg>
            <span className="font-medium">
                Upload Photo
            </span>
        </nav>
    </button>
}

export function C({ formData, setFormData, handleOnNextStep, isLastStep, handleOnPrevStep, isFirstStep }) {
    const [errors, setErrors] = useState({})
    const [formImages, setFormImages] = useState([])
    var cloudinary = new Cloudinary({ cloud_name: "dodhmzgln", secure: true, api_key: '581924666111559', api_secret: 'tOFPThIWE_rQusIpu27ZgezXG2E' });

    function logFormData(formData) {
        for (const entry of formData.entries()) {
            console.log(entry[0], entry[1]);
        }
    }


    const handleImageUpload = (file) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_PK);
            axios.post(`https://api-eu.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CN}/image/upload`, formData)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err)
                })
        });

    }


    const schema = object({
        images: array().min(2, 'A minimun of two images are needed to proceed').required('This fied is required'),
    }
    )
    const validateFormData = async () => {
        handleValidation(schema, {images: formImages})
            .then(res => {
                for (let i = 0; i < formImages.length; i++) {
                    const file = formImages[i]?.file;
                    // Upload each image file
                    handleImageUpload(file)
                        .then(result => {
                            console.log('Uploaded image:', result.secure_url);
                            const imageurl = result.secure_url
                            let imageList = [...formData?.images, imageurl]
                            // console.log(imageList)
                            setFormData(cv => cv = { ...cv, images: [...imageList] })
                            handleOnNextStep();
                        })
                        .catch(error => {
                            console.error('Error uploading image:', error);
                        });
                }
            })
            .catch(err => {
                setErrors(err)
            })


    }


    useEffect(() => {
        setErrors({})
    }, [formImages])

    useEffect(() => {
        console.log(formData?.images)
    }, [formData?.images])




    return (
        <div className=' max-w-7xl mx-auto flex flex-col gap-7 py-7 relative overflow-hidden'>
            <Imageuploadcomponent onError={(m) => setErrors({ images: m })} getImages={(imageList) => setFormImages(imageList)} imgs={formImages} />
            {errors?.images && <nav className=' mx-auto mt-4 text-red-800 font-semibold p-3 rounded-md bg-red-100'>
                <span className=' mr-1 bg-red-50 rounded-md py-1 px-2'>Failed </span> {errors?.images}
            </nav>}
            <div className='flex items-center justify-end gap-4 max-w-xl   mx-auto'>
                {!isFirstStep && <Primarybutton onClick={() => handleOnPrevStep()} className='!px-10' text="Previous" />}
                <Primarybutton onClick={() => validateFormData()} className='!px-10' text={isLastStep ? 'Done' : 'Next'} />
            </div>
        </div>
    )
}

export default C