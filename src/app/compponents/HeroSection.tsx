import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section>
    <div className='hero-section'>
       
        <div className='hero-container'>
            <h1 className='hero-heading'>illustration <br />
            <span className='hero-heading1'> Builder</span></h1>
            <p className='hero-para'>We provide tailored, high-quality illustration work for businesses, creators, and marketers, helping you stand out with visuals that tell your story.</p>
        </div>
        <div className='hero-img'>
        <Image
          src="/images/hero.svg"
          alt="Hero Image"
          width={450}
          height={550}
        />
        </div>
        
     
    </div>
    </section>
  )
}

export default HeroSection