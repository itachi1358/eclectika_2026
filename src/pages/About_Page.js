import {useEffect, useRef } from 'react'
import { gsap } from "gsap";
import "./About.css";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";


export default function About_Page() {
const contentRef = useRef(null);
const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  const lumosRef = useRef(null);

useEffect(() => {
  const moveLight = (e) => {
    gsap.to(lumosRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  window.addEventListener("mousemove", moveLight);

  return () => window.removeEventListener("mousemove", moveLight);
}, []);

  return (
    <div className="about_body">
      <Nav />
   

   
        <div className="about_container" ref={contentRef}>
  <h1 className="about_title">About Eclectika</h1>

  <p className="about_text">
    Eclectika is not just a fest — it is an experience where creativity,
    culture, and competition collide. A celebration of talent, passion,
    and innovation, it brings together minds from across the country to
    create moments that feel nothing short of magical.
  </p>

  <p className="about_text">
    From electrifying performances to immersive themes and unforgettable
    events, Eclectika transforms the ordinary into the extraordinary.
    Every year, we redefine imagination.
  </p>


  {/* Vision Section */}
  <div className="about_section">
    <h2 className="section_title">Our Vision</h2>
    <p className="about_text">
      Our vision is to create a platform that empowers students to express,
      experiment, and excel. Eclectika strives to inspire creativity beyond
      classrooms and cultivate a spirit of collaboration and leadership.
    </p>
  </div>

  {/* What Makes Us Unique */}
  <div className="about_section">
    <h2 className="section_title">What Makes Us Unique</h2>
    <p className="about_text">
      With dynamic themes, immersive stage designs, and high-energy events,
      Eclectika blends art, technology, and culture into one seamless
      celebration. From dance battles and music nights to innovation-driven
      competitions, every event carries a signature spark.
    </p>
  </div>

  {/* Legacy */}
  <div className="about_section">
    <h2 className="section_title">Our Legacy</h2>
    <p className="about_text">
      Over the years, Eclectika has grown into one of the most anticipated
      college fests, drawing participants and audiences from diverse
      backgrounds. It is a space where friendships are forged, talents are
      discovered, and unforgettable memories are created.
    </p>
      <div className="about_highlight">
    ✨ Where Art Meets Energy. Where Ideas Become Magic.
  </div>
  </div>

  {/* Faculty Advisor */}
  <div className="faculty_section">
    <h2 className="section_title">Faculty Advisor</h2>
    <p className="faculty_name">Dr. Lata</p>
    <p className="faculty_desc">
      Dr. Lata has been the guiding force behind Eclectika, mentoring the
      organizing team and ensuring that creativity is balanced with discipline
      and excellence. Her leadership and vision continue to shape the festival
      into a platform of inspiration and impact.
    </p>
  </div>
</div>

    </div>
  );
}
