import React from "react";
import "./Footer.css";
import face from '../assets/facebook_icon.png'
import insta from '../assets/instagram_icon.png'
import link from '../assets/linkedin_icon.png'
import tweet from '../assets/twitter_icon.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>Stay Connected, Stay Inspired</h2>
          <p>
          Eclectika'25 is more than just an event—it's a celebration of dreams, diversity, and determination. As Central India's largest cultural fest, we strive to create unforgettable experiences through creativity, innovation, and togetherness. Stay connected with us for updates, and don’t miss the chance to be part of a legacy that celebrates the essence of art and culture. Let’s make Eclectika'25 a journey to remember!
          </p>
        </div>
        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/eclectika.nitrr/" aria-label="Facebook">
            <img src={face} alt="facebook-circled--v5"/>
            </a>
            <a href="https://x.com/eclectika_nitrr" aria-label="Twitter">
            <img src={tweet} alt="facebook-circled--v5"/>
            </a>
            <a href="https://www.instagram.com/eclectika_nitrr/" aria-label="Instagram">
            <img src={insta} alt="facebook-circled--v5"/>
            </a>
            <a href="https://www.linkedin.com/company/eclectika-nit-raipur/" aria-label="LinkedIn">
            <img src={link} alt="facebook-circled--v5"/>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Eclectika. All rights reserved. Built
          with ❤️
        </p>
      </div>
    </footer>
  );
}