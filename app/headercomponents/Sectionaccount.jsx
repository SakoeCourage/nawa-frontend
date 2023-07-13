'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import ClickAwayListener from 'react-click-away-listener'
import Image from 'next/image'
import Cookies from 'js-cookie'

function Notification() {
    const [unread, setUnread] = useState(false)
    return <div className=' relative isolate text-white'>
        <svg className=' absolute right-1 z-0' width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="3" r="3" fill="#FF0000" />
        </svg>
        <svg className=' z-10' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.19 14.06L19.06 12.18C18.81 11.77 18.59 10.98 18.59 10.5V8.62999C18.59 4.99999 15.64 2.04999 12.02 2.04999C8.39002 2.05999 5.44002 4.99999 5.44002 8.62999V10.49C5.44002 10.97 5.22002 11.76 4.98002 12.17L3.85002 14.05C3.42002 14.78 3.32002 15.61 3.59002 16.33C3.86002 17.06 4.47002 17.64 5.27002 17.9C6.35002 18.26 7.44002 18.52 8.55002 18.71C8.66002 18.73 8.77002 18.74 8.88002 18.76C9.02002 18.78 9.17002 18.8 9.32002 18.82C9.58002 18.86 9.84002 18.89 10.11 18.91C10.74 18.97 11.38 19 12.02 19C12.65 19 13.28 18.97 13.9 18.91C14.13 18.89 14.36 18.87 14.58 18.84C14.76 18.82 14.94 18.8 15.12 18.77C15.23 18.76 15.34 18.74 15.45 18.72C16.57 18.54 17.68 18.26 18.76 17.9C19.53 17.64 20.12 17.06 20.4 16.32C20.68 15.57 20.6 14.75 20.19 14.06ZM12.75 9.99999C12.75 10.42 12.41 10.76 11.99 10.76C11.57 10.76 11.23 10.42 11.23 9.99999V6.89999C11.23 6.47999 11.57 6.13999 11.99 6.13999C12.41 6.13999 12.75 6.47999 12.75 6.89999V9.99999Z" fill="currentColor" />
            <path d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.87999 21.11C9.55999 20.81 9.31999 20.41 9.17999 20C9.30999 20.02 9.43999 20.03 9.57999 20.05C9.80999 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z" fill="currentColor" />
        </svg>
    </div>
}



function Accountmenu() {
    const [showMenu, setShowMenu] = useState(false)
    const { data: session, status } = useSession()


    useEffect(() => {
        if (session) {
            console.log(session)
            Cookies.set('accessToken', session.accessToken)
        }
    }, [session])

    const handleSignOut = () => {
        signOut();
        setShowMenu(false)
        Cookies.remove('accessToken')
    }

    return <>
        <div className=' relative'>
            <nav className=' flex items-center gap-4'>
                <nav className=' aspect-square h-10 bg-blue-200/25 rounded-full overflow-hidden p-2'>
                    <Image placeholder=' blur' alt='profile' src='/images/noprofile.png' height={500} width={500} quality={100} />
                </nav>

                <button className=' text-white flex items-center gap-2' onClick={() => setShowMenu(cv => cv = !cv)}>
                    {status == 'authenticated' && <nav>
                        {session.user?.name}
                    </nav>}
                    <svg className={` transform ${showMenu && 'rotate-180'}`} width="10" height="10" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00002 7.99997C7.41668 7.99997 6.83335 7.77497 6.39168 7.3333L0.95835 1.89997C0.716683 1.6583 0.716683 1.2583 0.95835 1.01664C1.20002 0.774972 1.60002 0.774972 1.84168 1.01664L7.27502 6.44997C7.67502 6.84997 8.32502 6.84997 8.72502 6.44997L14.1583 1.01664C14.4 0.774972 14.8 0.774972 15.0417 1.01664C15.2833 1.2583 15.2833 1.6583 15.0417 1.89997L9.60835 7.3333C9.16668 7.77497 8.58335 7.99997 8.00002 7.99997Z" fill="white" />
                    </svg>
                </button>
            </nav>
            {showMenu &&
                <ClickAwayListener onClickAway={() => setShowMenu(false)}>
                    <ul className=' absolute right-0 w-full transform translate-y-6 min-w-[9rem] bg-white border-2 rounded-md flex flex-col gap-2 p-4'>
                        <li className=' px-4 pr-8 py-2'><Link onClick={() => setShowMenu(false)} href='/profile/myaccount'>Profile</Link> </li>
                        <li className=' px-4 pr-8 py-2'><Link onClick={() => setShowMenu(false)} href='/profile/myaccount'>Account</Link></li>
                        <li className=' px-4 pr-8 py-2'><Link onClick={() => setShowMenu(false)} href='/profile/mylistings'>Listing</Link></li>
                        <li className=' px-4 pr-8 py-2 border-t-2'><button onClick={() => handleSignOut()}>Logout</button></li>
                    </ul>
                </ClickAwayListener>
            }

        </div>
    </>
}

function Sectionaccount() {
    return (
        <div className=' flex items-center gap-8'>
            <Notification />
            <Accountmenu />
        </div>
    )
}

export default Sectionaccount