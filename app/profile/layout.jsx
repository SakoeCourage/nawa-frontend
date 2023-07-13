import React from 'react'
import Navcomponent from './Navcomponent'

function layout({ children }) {

    return (
        <div className=' bg-white min-h-screen '>
            <nav className=' h-[var(--headerHeight)] bg-primary-deep-blue'>
            </nav>
            <div>
                <Navcomponent />
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout