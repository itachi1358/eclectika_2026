import React from 'react';
import './PastEvents.css';
import PastEventCard from './PastEventCard';
import yuhani from '../assets/Yohani.jpg'
import sachin from '../assets/Sachin.png';
import darshan from '../assets/Darshan.jpg';
import salim from '../assets/salim.png';
// import mohit from '../assets/mohit16.jpg';
import yaseerdesai from '../assets/Yaseer.jpg'
import laqshay from "../assets/Laqshay.png"
export default function PastEvents() {
  return (
    <div>
      <div className="title">
        <h1>Past Events</h1>
      </div>
      <div className="card-container2">
      <PastEventCard  backgroundImage={laqshay} title='Laqshay Kapoor' year='2025'/>
      <PastEventCard backgroundImage={yaseerdesai} title='Yaseer Desai' year='2024'/>
        <PastEventCard  backgroundImage={yuhani} title='Yohani' year='2023'/>
        <PastEventCard  backgroundImage={darshan} title='Darshan Raval' year='2020'/>
        <PastEventCard backgroundImage={salim} title='Salim Sulaiman' year='2018'/>
        <PastEventCard  backgroundImage={sachin} title='Sachin Jigar' year='2017'/>

      </div>
    </div>
  );
}