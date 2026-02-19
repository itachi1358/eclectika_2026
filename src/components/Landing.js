import React, { useEffect, useRef } from 'react';
import './landing.css';
import { gsap } from "gsap";
import Nav from './Nav';
import About_us from './About';
import Megaevents from './Megaevents';
import PastEvents from './PastEvents';
import Sponsors from './Spons';
import Footer from './Footer';
import OurTheme from './OurTheme';

export default function Landing() {
  const titleref = useRef(null);
  const sphereRef = useRef(null);

  // GSAP title animation
  useEffect(() => {
    gsap.fromTo(
      titleref.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.9,
        delay: 1,
        ease: "power3.out",
      }
    );
  }, []);

 

  return (
    <div className="landing_body">
      {/* Cursor sphere */}

      {/* Snow layers */}
      <div className="snow snow-back"></div>
      <div className="snow snow-back"></div>

      <div className="snow snow-mid"></div>
      <div className="snow snow-mid"></div>

      <div className="snow snow-front"></div>

      <Nav />

      <div className="title-container">
        <h1 className="main-title" ref={titleref}>Eclectika</h1>
      </div>

      <About_us />
      <OurTheme/>
      <Megaevents />
      <PastEvents />
      <Sponsors/>
      <Footer/>
      
    </div>
  );
}
