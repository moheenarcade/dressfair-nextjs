import Image from 'next/image';
import React from 'react';
import HeroBanner from "../../../public/dressfair-hereo-banner.avif";

const HeroSection = () => {

  return (
    <div className='bg-[#FD7400]'>
      <div className="">
        <Image className='w-full h-auto' width={1200} height={600} src='https://backend.dressfair.com/image/catalog/Artboard%201.jpg' alt='hero banner'/>
      </div>
    </div>
  )
}

export default HeroSection;
