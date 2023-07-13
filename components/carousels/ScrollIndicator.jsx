import React,{useRef, useState} from 'react'

function ScrollIndicator() {
    const scrollBar = useRef(null)
    const ScrollIndicator = useRef(null)
    const [thumbWidth,setThumbWidth] = useState(0)

    useEffect(() => {
        setThumbWidth(Number(scrollBar.current.getBoundingClientRect().width)/Number(maxItems))
    }, [])


    return (
        <div ref={scrollBar} className=" mx-10 max-w-xl w-full bg-[#D9D9D9] md:mx-auto  rounded-md  relative   h-[0.35rem]  cursor-pointer overflow-hidden">
            <nav ref={ScrollIndicator} style={{ width: `${thumbWidth}px`,left:`${Number(thumbWidth) * (  Number(currentIndex)  - 1) }px`  }} className=' bg-[#1B1B1B]/70   h-[0.35rem] rounded-md absolute transition-[left]'>
            </nav>
        </div>
    );

}

export default ScrollIndicator