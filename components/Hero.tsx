"use client"

import Image from 'next/image';
import CustomButton from './CustomButton';

function Hero() {

    const handleScroll = () =>{

    }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find and rent a car was never that easy!
            </h1>

            <p className='hero__subtitle'>
                Now your car rental experience is faster and 
                the booking processe effortless.
            </p>

            <CustomButton 
                title='Find Cars'
                containerStyles='bg-green-400
                text-white rounded-full mt-10'
                handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src='/hero.png' alt='hero' fill className='object-contain' />
            </div>   
            <div className='hero__image-overlay'></div>
            
        </div>
    </div>
  )
}

export default Hero