import React from 'react';
import './MegaEventCard.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className="card-container">
      <figure>
        <img src={props.image} alt="The Day" />
        <figcaption>{props.name}</figcaption>
        <p className='event-text'>
          <div className="date">{props.date}</div>
          {props.content}
          <Link to={props.link}>
          <button type="button">Apply Now</button>
          </Link>
        </p>
      </figure>
    </div>
  );
}