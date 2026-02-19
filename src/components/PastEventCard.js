import React from 'react';
import './PastEventCard.css'; // Import styles specific to the card

export default function PastEventCard({ title, backgroundImage,year }) {
  return (
    <div
      className="card"
      style={{
        background:`black`,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition:`centre`,
        backgroundSize:`cover`
      }}
    >
      <div className="card-content">
        <div className="content">
          <h2>{title}</h2>
          <h6>{year}</h6>
        </div>
      </div>
    </div>
  );
}