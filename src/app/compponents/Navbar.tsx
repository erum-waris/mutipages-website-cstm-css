"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavlinksPropTypes from "../../../types/PropTypes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links: NavlinksPropTypes[] = [
    { href: "/", title: "Home" },
    { href: "/discover", title: "Discover" },
    { href: "/portfolio", title: "Portfolio" },
    { href: "/support", title: "Support" },
  ];
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo-box">
          <Image
            src="/images/navlogo.svg"
            alt="nav-logo"
            height={30}
            width={30}
            className="nav-logo"
          />
          <div className="nav-logo-name">
            illustra<span className="nav-logo-name1">tion</span>
          </div>
        </div>

        {/* Nav Links (Desktop) */}
        <div className="navlinks">
          {links.map((link, index) => (
            <Link href={link.href} key={index} className="li">
              {link.title}
            </Link>
          ))}
        </div>

        <div onClick={() => setIsOpen(!isOpen)} className="ham-close">
          {isOpen ? (
            <div className="nav-icons-box">
              <Image
                src="/images/search-icon.svg"
                alt="search-img"
                height={30}
                width={30}
                className="search-icon"
              />
              <Image
                src="/images/cross-circle(1).svg"
                alt="close-img"
                height={30}
                width={30}
                className="close-icon"
              />
            </div>
          ) : (
            <div className="nav-icons-box">
              <Image
                src="/images/search-icon.svg"
                alt="search-img"
                height={30}
                width={30}
                className="hamburger-icon"
              />
              <Image
                src="/images/hamburger.svg"
                alt="hamburger-img"
                height={30}
                width={30}
                className="hamburger-icon"
              />
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="open-menu">
          {links.map((link, index) => (
            <Link href={link.href} key={index} className="list-group">
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
