"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import '../css/NavAnimation.css';

export default function NavAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const leftDotRef = useRef(null);
  const rightDotRef = useRef(null);
  const crossRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      gsap.to(leftDotRef.current, { x: 17, y: 0, duration: 0.4, ease: "power2.out" });
      gsap.to(rightDotRef.current, { x: -17, y: 0, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(leftDotRef.current, { x: 0, y: 0, duration: 0.4, ease: "power2.inOut" });
      gsap.to(rightDotRef.current, { x: 0, y: 0, duration: 0.4, ease: "power2.inOut" });
    }
  }, [isHovered]);

  useEffect(() => {
    if (isOpen) {
      gsap.to(crossRef.current, { scale: 1, opacity: 1, duration: 0.1, ease: "back.out(1.7)" });
    } else {
      gsap.to(crossRef.current, {  delay: 2, scale: 0.5, opacity: 0, duration: 0.1, ease: "back.in(1.7)" });
    }
  }, [isOpen]);

  return (
    <div className="circle-animation">
      <div
        className=" relative w-10 h-10 flex items-center justify-center border-2 border-black rounded-full cursor-pointer overflow-hidden"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isOpen ? (
          <div className="two-dots ">
            <div ref={leftDotRef} className="w-1.5 h-1.5 bg-black rounded-full" />
            <div ref={rightDotRef} className="w-1.5 h-1.5 bg-black rounded-full" />
          </div>
        ) : (
          <div
            ref={crossRef}
            className="absolute flex items-center justify-center w-full h-full bg-black rounded-full text-white text-3xl font-bold opacity-0 scale-50"
          >
            X
          </div>
        )}
      </div>
    </div>
    
  );
}
