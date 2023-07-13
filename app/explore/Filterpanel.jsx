'use client'
import React from 'react'
import Inputselect from '@/components/form/Inputselect'
import { categories } from './Exploresection'
import Primarybutton from '@/components/form/Primarybutton'
function Filterpanel() {
    return (
        <div className=' hidden  min-w-[20rem] md:flex flex-col  h-max  px-2  py-3 sticky top-[var(--headerHeight)] '>
            <nav className="flex items-center gap-2 p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 144h448M112 256h288M208 368h96" /></svg>
                <span> Filter Result</span>
            </nav>
            <div className=' flex flex-col gap-4'>
                <div className=' shadow-md border-2 rounded-md p-3 bg-primary-deep-blue/10 '>
                    <nav className=' text-primary-deep-blue flex items-center gap-1  mb-2 border-b pb-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 4h6v6h-6zM4 14h6v6H4zm10 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0M4 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0" /></svg>
                        <span>
                            Category
                        </span>
                    </nav>
                    <Inputselect placeholder="Select Category" data={[...categories.map((category) => { return ({ label: category, value: category }) })]} />
                </div>
                <div className=' shadow-md border-2 rounded-md p-3 bg-primary-deep-blue/10 '>
                    <nav className=' text-primary-deep-blue flex items-center gap-1  mb-2 border-b pb-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" /><path d="M17.5 9.5c0 3.038-2 6.5-5.5 10.5c-3.5-4-5.5-7.462-5.5-10.5a5.5 5.5 0 1 1 11 0Z" /></g></svg>
                        <span>
                            Location
                        </span>
                    </nav>
                    <Inputselect placeholder="Select Location" data={[...categories.map((category) => { return ({ label: category, value: category }) })]} />
                </div>
                <div className=' shadow-md border-2 rounded-md p-3 bg-primary-deep-blue/10 '>
                    <nav className=' text-primary-deep-blue flex items-center gap-1  mb-2 border-b pb-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m18 21l-4-4h3V7h-3l4-4l4 4h-3v10h3M2 19v-2h10v2M2 13v-2h7v2M2 7V5h4v2H2Z" /></svg>
                        <span>
                            Sort Items
                        </span>
                    </nav>
                    <Inputselect placeholder="Sort By" data={[{ label: "Expensive", value: "Expensise" }, { label: "Cheap", value: "Cheap" }, { label: "Higly Rated ", value: "Higly Rated" }]} />
                </div>

            <Primarybutton text='Apply' />
            </div>

        </div>
    )
}

export default Filterpanel