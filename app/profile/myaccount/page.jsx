"use client"
import React from 'react'
import paremeterlist from './paremeterlist'
import Link from 'next/link'

function Paremetercard({ icon, title, caption,link }) {
    return <Link as={<a/>} href={link && link} className=' shadow-md rounded-md flex flex-col gap-8 bg-primary-desktop-color p-3 py-4 border border-t-[#4E54FE] border-l-[6px] border-l-[#4E54FE]'>
        <span>{icon}</span>
        <nav>
            <h6 className=' font-medium my-2 text-base text-alternative-light-dark'>{title}</h6>
            <p className=' text-[#707070]'>{caption}</p>
        </nav>
    </Link>
}

function page() {
    
    return (
        <div className=' max-w-7xl mx-auto py-10  '>
            <section className=' max-w-5xl mx-auto '>
                <nav>
                    <h6 className=' font-medium text-2xl'>
                        Account
                    </h6>
                    <p className=' mt-4'>
                        <b className=' font-medium'>Lena Ablah</b>, Lenaablah32@gmail.com - <span className=' text-[#2320FB] underline'>Go to Profile</span>
                    </p>
                </nav>
                <main className=' mt-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full p-2 lg:p-0'>
                  {paremeterlist.map((paremter,i)=> <Paremetercard 
                  key={i} 
                  icon={paremter.icon}
                  title={paremter.title}
                  caption={paremter.caption}
                  link={paremter.link}
                  />)}
                </main>
            </section>
        </div>
    )
}

export default page