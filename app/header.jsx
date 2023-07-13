'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Sectionlogin from './headercomponents/Sectionlogin'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Sectionaccount from './headercomponents/Sectionaccount'
import { getMatchorEqual } from './profile/Navcomponent'

function Header() {
    const path = usePathname()
    const { data,status } = useSession()

    const setOnscrollEffect = () => {
        if (window.scrollY > 0) {
            document.getElementById('header').classList.add('bg-primary-deep-blue')
            document.documentElement.style.setProperty('--headerHeight', '4rem');
        } else {
            document.documentElement.style.setProperty('--headerHeight', '6rem');
            document.getElementById('header').classList.remove('bg-primary-deep-blue')

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', setOnscrollEffect, true)
        return () => window.removeEventListener('scroll', setOnscrollEffect, true)

    }, [])


    useEffect(() => {
       if(status == 'authenticated'){
        localStorage.setItem('accessToken',data.accessToken)
        console.log(localStorage.getItem('accessToken'))
       }
    }, [status])
    


    return (
        <div id='header' className={`h-[var(--headerHeight)] transition-all duration-300 bg-black/20 backdrop-blur-[2px] z-40 fixed top-0 w-full ${path == '/' ? 'bg-black/20' : 'bg-primary-deep-blue'}`}>
            <div className=' max-w-7xl mx-auto flex items-center h-full justify-between  '>
                <nav>
                    <ul className="w-full flex items-center gap-10 text-white">
                        <li className=' text-lg'><Link as={<a />} href='/' className={` ${getMatchorEqual(path,'/',true) && 'text-lg'}`}>No Worries</Link></li>
                        <li className=' !text-sm' ><Link as={<a />} href='/explore' className={` ${getMatchorEqual(path,'/explore',false) && 'text-lg'}`} >Explore</Link></li>
                        <li className=' !text-sm'><Link as={<a />} className={` ${getMatchorEqual(path,'/about',true) && 'text-lg'}`} href='/about'>About Nawa</Link></li>
                        <li className=' !text-sm'>Guide & Tips</li>
                        <li className=' !text-sm'>Support Us</li>
                    </ul>
                </nav>
                {status !== 'loading' &&
                    <> {status === 'authenticated' ? <Sectionaccount /> : <Sectionlogin />}</>
                }
            </div>
        </div>

    )
}

export default Header