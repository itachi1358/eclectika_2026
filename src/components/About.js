
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";

gsap.registerPlugin(ScrollTrigger);

export default function About_us() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".about-section-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-wrapper">
      <div className="about-section" ref={sectionRef}>
        <div className="about-section-text">
          <h1>About Us</h1>
          <div className="about-section-content">
            <p>
              Eclectika, the cultural festival of NIT Raipur, is widely renowned as the largest fest in Central India. With participation from over a hundred colleges across the country, Eclectika stands as a vibrant celebration of innovation, creativity, and excellence.

Over the years, the festival has evolved into a dynamic platform where talent meets opportunity. From electrifying musical nights and high-energy dance battles to thought-provoking literary events and competitive technical showcases, Eclectika brings together diverse expressions of art and intellect under one grand stage. It serves as a melting pot of cultures, ideas, and perspectives, fostering collaboration and healthy competition among students nationwide.
            </p>
          </div>
        </div>
        <div className="logo"></div>
      </div>
    </div>
  );
}
