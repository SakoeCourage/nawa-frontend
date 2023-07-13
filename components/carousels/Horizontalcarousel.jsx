'use client'
import React, { useState, useEffect, useRef } from 'react'
import ScrollIndicator from './ScrollIndicator'

function Horizontalcarousel({ children, className,getCurrentIndex,allowAutoScroll = true}) {

    const [scrolledLeft, setScrolledLeft] = useState(false)
    const [scrolledRight, setScrolledRight] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(1)
    const scrollcontainer = useRef(null)

    function getviewPortWidth() {
        let intViewportWidth = window.innerWidth;
        let scrollamout = 0;
        if (intViewportWidth <= 700) {
            scrollamout = 200;
        } else if (intViewportWidth > 700 && intViewportWidth <= 900) {
            scrollamout = 300;
        } else if (intViewportWidth > 900) {
            scrollamout = 600;
        }
        return scrollamout;
    }

    function scrolltoLeft() {
        scrollcontainer.current.scrollBy({
            left: -getviewPortWidth(),
            behavior: "smooth",
        });
    }

    function scrolltoRight() {
        scrollcontainer.current.scrollBy({
            left: getviewPortWidth(),
            behavior: "smooth",
        });
    }

    function isElementFullyVisibleInContainer(element, container) {
        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        return (
            elementRect.top >= containerRect.top &&
            elementRect.bottom <= containerRect.bottom &&
            elementRect.left >= containerRect.left &&
            elementRect.right <= containerRect.right
        );
    }

    function getscrolledamount() {
        let index = [];
        let element = document.querySelectorAll(".scroll-card");
        element.forEach((el, i) => {
            if (isElementFullyVisibleInContainer(el, scrollcontainer.current)) {
                setCurrentIndex(i + 1)
                getCurrentIndex(i + 1)
            }
        });

        scrollcontainer.current.scrollLeft > 0
            ? setScrolledLeft(true)
            : setScrolledLeft(false);
        scrollcontainer.current.scrollWidth == Math.floor(scrollcontainer.current.scrollLeft +
            scrollcontainer.current.getBoundingClientRect().width)
            ? (setScrolledRight(false))
            : (setScrolledRight(true));
    }


    function addautoscroll() {
        var scroll = true;
        var container = scrollcontainer.current
        var onDisablescrollElements = document.querySelectorAll('.stop-auto-scroll')
        onDisablescrollElements.forEach(ele => {
            ele.addEventListener("mouseover", function () {
                scroll = false;
            });
            ele.addEventListener("mouseout", function () {
                scroll = true;
            });
        })

        function scrollableamout() {
            let intViewportWidth = window.innerWidth;
            let scrollamout = 0;
            if (intViewportWidth <= 700) {
                scrollamout = 200;
            } else if (intViewportWidth > 700 && intViewportWidth <= 900) {
                scrollamout = 300;
            } else if (intViewportWidth > 900) {
                scrollamout = 600;
            }
            return scrollamout;
        }

        function autoscroll() {
            if (
                container.scrollWidth != Math.round(container.scrollLeft + container.getBoundingClientRect().width)
            ) {
                container.scrollBy({
                    left: scrollableamout(),
                    behavior: "smooth",
                });
            } else {
                container.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            }
        }

        setInterval(() => {
            if (scroll == true) {
                autoscroll();
            } else {
                return;
            }
        }, 5000);
    }

    useEffect(() => {
       allowAutoScroll && addautoscroll()
    }, [])

    return (
        <div className={`relative   ${className}`}>
            <button onClick={() => scrolltoLeft()} className={`stop-auto-scroll absolute left-3 z-30 w-16 h-16 hover:opacity-100 inset-y-[40%] opacity-0 ${scrolledLeft && 'opacity-50'}`}>
                <svg width="100%" height="100%" viewBox="0 0 92 92" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="46" cy="46" r="46" transform="rotate(-180 46 46)" fill="white" fill-opacity="1" />
                    <path d="M37.9393 44.9393C37.3536 45.5251 37.3536 46.4749 37.9393 47.0607L47.4853 56.6066C48.0711 57.1924 49.0208 57.1924 49.6066 56.6066C50.1924 56.0208 50.1924 55.0711 49.6066 54.4853L41.1213 46L49.6066 37.5147C50.1924 36.9289 50.1924 35.9792 49.6066 35.3934C49.0208 34.8076 48.0711 34.8076 47.4853 35.3934L37.9393 44.9393ZM41 44.5L39 44.5L39 47.5L41 47.5L41 44.5Z" fill="#555555" />
                </svg>
            </button>
            <button onClick={() => scrolltoRight()} className={`stop-auto-scroll absolute right-3 z-30 w-16 h-16 hover:opacity-100 inset-y-[40%] opacity-0 ${scrolledRight && 'opacity-50'}`}>
                <svg width="100%" height="100%" viewBox="0 0 92 92" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="46" cy="46" r="46" fill="white" fill-opacity="1" />
                    <path d="M54.0607 47.0607C54.6464 46.4749 54.6464 45.5251 54.0607 44.9393L44.5147 35.3934C43.9289 34.8076 42.9792 34.8076 42.3934 35.3934C41.8076 35.9792 41.8076 36.9289 42.3934 37.5147L50.8787 46L42.3934 54.4853C41.8076 55.0711 41.8076 56.0208 42.3934 56.6066C42.9792 57.1924 43.9289 57.1924 44.5147 56.6066L54.0607 47.0607ZM51 47.5H53V44.5H51V47.5Z" fill="#555555" />
                </svg>
            </button>
            <div ref={scrollcontainer} onScroll={() => getscrolledamount()} className='stop-auto-scroll flex items-center gap-3  hidescroll overflow-y-hidden overflow-x-scroll w-full rounded-md snap-x '>
                {children}
            </div>
        </div>
    )
}

export default Horizontalcarousel