import React from 'react'
import Card from './Card'

 // mainheading: string;
// heading:string;
// description: string;
// image:string;
// alt: string;
// href:string;
// title:string

const DiscoverInfo = [
    {
        mainheading:"Discover",
        heading: "Services",
        description:"At Scooty, we take pride in offering top-tier, custom-designed scooters that cater to the diverse needs of commuters, adventurers, and eco-conscious travelers. Our mission is to revolutionize urban mobility by providing sleek, efficient. With cutting-edge technology, ergonomic designs.",
        image:"/images/scooty.png",
        alt: "Discover image",
        href: "/",
        title: "Discover More"
    },
    {
        mainheading:"Headset",
        heading: "Services",
        description:"Experience unparalleled sound quality and supreme comfort with our premium headsets. Perfect for gaming, immersive music, and crystal-clear calls, these headsets Elevate your audio experience to the next level—upgrade today!",
        image: "/images/Headset.svg",
       alt: "Headset img",
       href:"/",
       title: "Explore More"
    },
    {
        mainheading:"Sofa",
        heading: "Services",
        description:"Transform your living space into a haven of style and comfort with our exquisite sofa interiors. our sofas are crafted from premium materials to ensure durability and luxury.Sophistication, and charm to any room. Whether you're entertaining guests or enjoying a quiet evening at home, our sofas redefine relaxation and elevate your décor.",
        image: "/images/sofa.jpg",
        alt: "sofa img",
        href:"/",
        title: "Explore interiors"
    }
]



function DiscoverSection() {
  return (
    <div>
        <div className="discover-section">
            <h1 className='hero-heading'>Discover Our <span className='hero-heading1' >Services</span></h1>
            {DiscoverInfo.map((info, index) => (
                <div key={index} className="discover-card">
                   <Card 
                   mainheading={info.mainheading} 
                   heading={info.heading} 
                   description={info.description}
                   image={info.image}
                   alt={info.alt} 
                   href={info.href} 
                   title={info.title}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DiscoverSection
