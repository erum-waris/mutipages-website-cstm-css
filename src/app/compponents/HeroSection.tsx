import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section>
    <div className='hero-section'>
       
        <div className='hero-container'>
            <h1 className='hero-heading'>illustration <br />
            <span className='hero-heading1'> Builder</span></h1>
            <p className='hero-para'> At Builder, we are committed to delivering bespoke, high-quality illustration services designed to meet the unique needs of businesses, creators, and marketers. Whether you are launching a new product, our team specializes in creating sofa interiors. Meticulously designed to harmonize functionality with timeless elegance, our sofas are crafted from premium materials to ensure durability and luxury.  
   
  </p>
        </div>
        <div className='hero-sec-img'>
        <Image
          src="/images/hero.svg"
          alt="Hero Image"
          width={350}
          height={350}
          className='hero-img'
        />
        </div>
        
     
    </div>
    </section>
  )
}

export default HeroSection