'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import Imagepreviewer from './Imagepreviewer';
const images = [
    "/images/Rectangle 2.png",
    "/images/Rectangle 3.png",
    "/images/Rectangle 4.png",
    "/images/Rectangle 5.png",
    "/images/Rectangle 6.png",
    "/images/Rectangle 7.png",
    "/images/Rectangle 8.png",
    "/images/Rectangle 9.png",
];
const GridComponent = () => {


  return (
    <div>
        <Imagepreviewer name='image1' />
    </div>
  );
};

export default GridComponent;
