'use client';

import { useState, useEffect, useRef } from "react";
import "../css/Navbar.css";
import Image from "next/image";
import NavAnimation from "./NavAnimation";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Our Courses", href: "#Our Courses" },
  { label: "About us", href: "About us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    // Only initialize GSAP timeline if we're using the sidebar
    if (sidebarRef.current) {
      tl.current = gsap.timeline({ paused: true });

      tl.current.to(sidebarRef.current, {
        right: 0,
        duration: 0.3,
      });

      tl.current.from(
        ".float h4",
        {
          width: "50%",
          duration: 0.5,
          stagger: 0.09,
          opacity: 0,
        },
        "-=0.3"
      );

      tl.current.from(".float i", {
        opacity: 0,
      });
    }
  }, []);

  const toggleSidebar = () => {
    // Only toggle if timeline exists
    if (tl.current) {
      if (isOpen) {
        tl.current.reverse();
      } else {
        tl.current.play();
      }
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav className="navbar">
      <div className="main-container navbar-container">
        <Image
          src="/assets/Logo.png"
          width={165}
          height={72}
          className="nav-logo"
          alt="Online-Taleem-ul-Quran"
        />

        <div className="nav-content">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <div onClick={toggleSidebar}>
            <NavAnimation />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      {/* <div ref={sidebarRef} className="float">
        <h4><NavbarAnimatedText /></h4>
        <h4>Services</h4>
        <h4>New Collections</h4>
        <h4>About Us</h4>
        <h4>Contact Us</h4>
        <i className="ri-close-line" onClick={toggleSidebar}></i>
      </div> */}
    </nav>
  );
}
