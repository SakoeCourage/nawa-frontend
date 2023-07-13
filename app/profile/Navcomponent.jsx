'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export function getMatchorEqual (path,pattern,exact = false){
    if(exact){
        return path === pattern
    }else{
        return path === pattern || path.startsWith(pattern)
    }
}

function Navcomponent(){
    const path = usePathname()
    return  <ul className=' flex items-center justify-center py-8 gap-5 border-b-2 '>
    <li><Link as={<a/>} className={`py-2 px-2 ${getMatchorEqual(path,'/profile/mylistings') && 'account-link-active'}`} href='/profile/mylistings'>Manage Listings</Link></li>
    <li><Link as={<a/>} className={`py-2 px-2 ${getMatchorEqual(path,'/profile/myaccount') && 'account-link-active'}`} href='/profile/myaccount' >Account</Link></li>
    <li><Link as={<a/>} className={`py-2 px-2 ${getMatchorEqual(path,'/profile/member') && 'account-link-active'}`} href='/profile/member'>Become a member (NAWA)</Link></li>
</ul>
}

export default Navcomponent