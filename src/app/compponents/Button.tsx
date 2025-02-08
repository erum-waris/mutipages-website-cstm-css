"use client"
import Link from 'next/link';
import React from 'react'
interface ButtonProps {
    href:string;
    title:string;
}
const Button = (props:ButtonProps) => {
  return (
    <div className='button'>
       <Link href={props.href} className="btn-link">{props.title} </Link> 
    </div>
  )
}

export default Button