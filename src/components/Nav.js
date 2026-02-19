import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      linksRef.current,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-logo">Sanskriti</div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {[
          { name: "Home", path: "/landing" },
          { name: "About", path: "/About" },
        ].map((item, i) => (
          <li key={item.name} ref={(el) => (linksRef.current[i] = el)}>
            <Link
              to={item.path}
              className="nav-link-item"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
