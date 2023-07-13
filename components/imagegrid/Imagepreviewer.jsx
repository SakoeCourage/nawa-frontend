/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState, useMemo, useEffect } from 'react'
import Loadingspinner from '../Spinners/Loadingspinner'

export const Imagepreviewer = ({ name = '', setimage = void (0), removable = true, source = null, inactive = false, ...props }) => {
    const [fileisvalid, setfileisvalid] = useState(false)
    const [filename, setfilename] = useState('no file choosen')
    const [filetype, setfiletype] = useState(null)
    const [file, setfile] = useState(null)
    const [prev_file, setprev_file] = useState(null)
    const [image, setImage] = useState('/images/blankprofilepicture.svg')
    const accepted_types = ['image/jpeg', 'image/jpg', 'image/png', 'image/tiff']
    const [loadingfile, setLoadingFile] = useState(false)
    const getif_file = useMemo(() => file, [file])
    const setDefualtImage = () => {
        return '/images/blankprofilepicture.svg'
    }
    const getfileinfo = () => {
        if (file) {
            setfilename(file.name);
            setfiletype(file.type);
        }
    }

    const checkvalidfile = () => {
        if (accepted_types.includes(filetype)) {
            setfileisvalid(true);
        }
        else {
            // setfileisvalid(false);
        }
    }

    const getimage = (e, img) => {
        const [c_file] = e.target.files
        if (c_file) {
            setLoadingFile(true)
            setTimeout(() => {
                setfile(e.target.files[0])
                document.querySelector(`#${img}`).src = URL.createObjectURL(c_file);
                checkvalidfile();
                getfileinfo();
                setLoadingFile(false)
            }, 100);
            props.hasOwnProperty('getImageData') && props.getImageData(c_file)
        }
    }
    const resetImage = () => {
        setfile('');
        setfileisvalid(true)
        setfilename('no file choosen')
        setfiletype(null)
        setprev_file(null)
        props.hasOwnProperty('getImageData') && props.getImageData(file)
    }

    useEffect(() => {
        if (file) {
            setprev_file(file)
        } else {
            setfile(prev_file)
        }
    }, [file])

    useEffect(() => {
        if (source) {
            setfile(source)
            getfileinfo();
        }
    }, [source])

    return (
        <div><div
            className={['inline-block mx-4 md:mx-8  transition-transform ease-linear', inactive && 'pointer-events-none opacity-60 transform  scale-90']}
        >
            <div className="flex flex-col py-2 h-full w-full  ">
                <div
                    className={`w-44  h-44 md:w-44 md:h-44 self-center flex-none rounded-xl overflow-hidden relative `}
                >
                    {loadingfile && <div className='absolute inset-0 bg-gray-100/50 flex items-center justify-center'>
                        <Loadingspinner />
                    </div>}
                    <img
                        className={['w-full h-full   aspect-square object-cover img_file', !file && 'opacity-50 object-cover bg-gray-200']}
                        src={setDefualtImage()}
                        alt="Image Upload"
                        id={name}
                    />
                    {file && removable &&
                        <button
                            onClick={() => resetImage()}
                            className="absolute top-1 right-1 text-red-500 font-bold"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.92 12.75H7.92C7.51 12.75 7.17 12.41 7.17 12C7.17 11.59 7.51 11.25 7.92 11.25H15.92C16.33 11.25 16.67 11.59 16.67 12C16.67 12.41 16.34 12.75 15.92 12.75Z" fill="white" />
                            </svg>

                        </button>
                    }
                </div>
                <label className="cursor-pointer flex flex-col self-center w-max my-2 ">
                    <span
                        className={`self-center text-xs md:text-sm truncate text-center max-w-[10rem] mx-2 text-gray-600 underline mb-2`}
                    >
                        {filename}
                    </span>

                    <span
                        className="max-w-min self-center focus:outline-none text-center text-blue-700 text-sm px-4 rounded-full bg-blue-100 hover:bg-blue-400 hover:text-white hover:shadow-lg"
                    >{!file ? 'choose' : 'change'}</span>
                    <input
                        onChange={(e) => getimage(e, name)}
                        type="file"
                        className="hidden"
                        accept=".jpg, .jpeg, .png .tiff"
                        name={name}
                        id={name}
                    />
                </label>
            </div>
        </div></div>
    )
}

export default Imagepreviewer