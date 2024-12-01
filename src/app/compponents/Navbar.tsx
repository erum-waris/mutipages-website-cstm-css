"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavlinksPropTypes from "../../../types/PropTypes";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links : NavlinksPropTypes[] = [
    { href: '/', title: 'Home' },
    { href: '/', title: 'Discover' },
    { href: '/', title: 'Portfolio' },
    { href: '/', title: 'Support' },
   
  ]
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-box">
          
            <Image src="/images/navlogo.svg" alt="nav-logo" height={30} width={30} className="nav-logo"  />
         <div className="nav-logo-name">illustra<span className="nav-logo-name1" >tion</span></div>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="navlinks">
          {links.map((link,index) => (
           
            <Link href={link.href} key={index} className="li">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="nav-icons-box">
          <Image src="/images/search-icon.svg" alt="search-img" height={30} width={30} className="hamburger-icon"/>
           <Image  src="/images/hamburger.svg" alt="hamburger-img" height={30} width={30} className="hamburger-icon"/></div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="ham-close"
        >
            { isOpen ? (<div>
              <Image src="/images/close.png" alt="close-img" height={40} width={40} className="close-icon"/>
          </div>) : (<div> <Image  src="/images/hamburger.svg" alt="close-img" height={30} width={30} className="hamburger-icon"/></div>)
          }
          
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="open-menu">
          {links.map((link,index) => (
            <Link href={link.href} key={index}  className="li"
            onClick={() => setIsOpen(false)}>
                {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;