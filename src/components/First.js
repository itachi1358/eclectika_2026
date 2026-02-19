import React from 'react';
import { Link } from 'react-router-dom';
import './First.css';
import title from '../assets/harry_title.png';

export default function First() {
  return (
    <div className="intro">
      {/* Snow layers */}
      <div className="snow snow-back"></div>
      <div className="snow snow-mid"></div>
      <div className="snow snow-front"></div>

      <div className="title">
        <img src={title} alt="Harry Potter" />
      </div>

      <Link to="/intro" className="magic-link">
        <button className="magic-btn">
          click to unlock the magical world
        </button>
      </Link>
    </div>
  );
}
