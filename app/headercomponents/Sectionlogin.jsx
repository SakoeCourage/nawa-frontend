'use client'
import React, { useEffect, useState } from 'react'
import Loginformwithmodal from '@/components/form/Loginformwithmodal'
import { usePathname, useParams, useSearchParams, useRouter } from 'next/navigation'
import { addOrUpdateUrlParam, removeURLParameter } from '../utils'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
function Sectionlogin() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const searchparams = useSearchParams()
    const login = searchparams.get('login')


   

    return (
        <>
            {
                login && !session?.user && <Loginformwithmodal setShowLoginForm={() => router.back()} />
            }

            <nav>
                <ul className=' flex items-center gap-7'>
                    <li className='  text-white'>
                        <button onClick={() => router.push(addOrUpdateUrlParam(window.location.href, 'login', true))} className="w-full flex items-center gap-2">

                            <svg width="16" height="18" viewBox="0 0 20 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" fill="currentColor" />
                                <path d="M9.99991 12.5C4.98991 12.5 0.909912 15.86 0.909912 20C0.909912 20.28 1.12991 20.5 1.40991 20.5H18.5899C18.8699 20.5 19.0899 20.28 19.0899 20C19.0899 15.86 15.0099 12.5 9.99991 12.5Z" fill="#FEFEFE" />
                            </svg>

                            <span>Login</span>
                        </button>

                    </li>
                    <li>
                        <button className='flex items-center gap-3 bg-primary-deep-blue rounded-full text-white p-2 px-4'>
                            <svg className=' text-white' width="16" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.5905 10.6361C13.6003 9.86948 13.804 9.11784 14.1824 8.4511C14.5608 7.78435 15.1017 7.22416 15.7548 6.82264C15.3399 6.2301 14.7926 5.74246 14.1563 5.39845C13.52 5.05445 12.8122 4.86356 12.0892 4.84093C10.5469 4.67904 9.05173 5.76381 8.26579 5.76381C7.46466 5.76381 6.25462 4.85701 4.95159 4.88381C4.10876 4.91104 3.28735 5.15613 2.5674 5.5952C1.84746 6.03427 1.25352 6.65235 0.843468 7.38921C-0.932756 10.4645 0.39215 14.9842 2.09366 17.4701C2.94496 18.6874 3.93988 20.0471 5.24174 19.9989C6.51567 19.946 6.99147 19.1865 8.52921 19.1865C10.0527 19.1865 10.4991 19.9989 11.8273 19.9682C13.1943 19.946 14.0556 18.7455 14.877 17.5168C15.4887 16.6494 15.9594 15.6908 16.2716 14.6765C15.4774 14.3406 14.7997 13.7783 14.3229 13.0598C13.8461 12.3413 13.5914 11.4984 13.5905 10.6361Z" fill="#FEFEFE" />
                                <path d="M11.0816 3.20594C11.827 2.31119 12.1942 1.16113 12.1053 0C10.9665 0.119599 9.91469 0.66383 9.15928 1.52425C8.78993 1.94459 8.50705 2.43361 8.32681 2.96334C8.14657 3.49307 8.0725 4.05313 8.10884 4.6115C8.6784 4.61736 9.24187 4.49391 9.7568 4.25045C10.2717 4.00698 10.7247 3.64985 11.0816 3.20594Z" fill="#FEFEFE" />
                            </svg>
                            <span>Download App</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Sectionlogin