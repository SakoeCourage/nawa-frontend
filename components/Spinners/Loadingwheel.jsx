import React from 'react'

function Loadingwheel({className}) {
    return (

        <div className={`fixed max-h-[screen] inset-0  flex items-start z-50  isolate ${className}`}>
            <div className="loadingwheel ">
                <div className="loadingBar"></div>
            </div>
        </div>

    )
}

export default Loadingwheel