import React from 'react'
import Image from 'next/image'

function Logoinscription() {
    return (
        <div className=' max-w-5xl w-full mx-auto py-10 grid grid-cols-1 md:grid-cols-5'>
            <nav className=' bg-primary-deep-orange flex items-center justify-center md:col-span-2 aspect-[11/12] rounded-md'>
                <Image quality={100} height={300} width={300} alt='NAWA LOGO' src='/images/Nawalogblueaccent.png' />
            </nav>
            <nav className=' md:col-span-3 flex items-center justify-center py-2'>
                <nav className=' max-w-md h-full  mx-auto flex flex-col  '>
                    <h6 className=' font-semibold text-2xl'> What is No Worries</h6>
                    <nav className=' flex flex-col justify-evenly h-full grow '>
                        <p>

                            “No Worries - the essential guide to living in Ghana  ” is an independent resource portal published by the North American Women’s Association

                        </p>
                        <p>  NAWA Ghana is a non profit organization gathering more than 200
                            members who represent  more than 50 nationalities  worldwide.</p>

                        <p>
                            No Worries portal  compiles everything a newcomer needs to know about visiting or living in Ghana. The information, insight and lessons come from our members years of experience living in Ghana.

                        </p>
                    </nav>
                </nav>
            </nav>

        </div>
    )
}

export default Logoinscription