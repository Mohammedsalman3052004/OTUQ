// "use client"

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import '../css/Navbar.css';

// const NavbarAnimatedText = () => {
//   const textRef = useRef(null);



//   useEffect(() => {
//     const textContainer = textRef.current;
//     const letters = textContainer.querySelectorAll(".letter");

//     textContainer.addEventListener("mouseenter", () => {
//       gsap.to(letters, {
//         rotateY: 10,
//         fontFamily: "Dancing Script",
//         delay: 0.3,
//         duration: 0.3,
//         ease: "power3.out",
//         stagger: 0.05,
//       });
//     });

//     textContainer.addEventListener("mouseleave", () => {
//       gsap.to(letters, {
//         rotateY: 0,
//         fontFamily: "Dancing Script",
//         delay: 0.3,
//         color: "#000000",
//         duration: 0.3,
//         ease: "power3.out",
//         stagger: 0.05,
//       });
//     });
//   }, []);

//   return (
//     <div 
//       ref={textRef} 
//       className="cursor-pointer text-5xl font-bold inline-block hover-text nav-content-text"
//     >
//       {["S", "a", "l", "m", "a", "n"].map((char, index) => (
//         <span 
//           key={index} 
//           className="letter inline-block mx-1"
//           style={{ fontFamily: "DM Sans" }}
//         >
//           {char}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default NavbarAnimatedText;
