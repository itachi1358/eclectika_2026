import React from 'react';
import './Spons.css';
import ec_logo from '../assets/eclectika_img.jpg'
import zeeshan from '../assets/zeeshan.jpg'
// import htx from '../assets/hair_trim_x.jpg'
// import gagan from '../assets/gagan.jpg'
// import darshan from '../assets/darshan_library.jpg'
import annapurna from '../assets/annapurna.jpg'
import wipro from "../assets/wipro.png"
import cspgcl from "../assets/cspgcl.png"
import gaana from '../assets/gaana.jpg'
import { Link } from 'react-router-dom';
export default function Sponsors() {
  return (
    <div>
      <h1 className="title">Sponsors</h1>
      <div className="spons-container">
      <div className="sponsors">
        <img src={wipro}  alt="Sponsor 1"/>

        <img src="https://play-lh.googleusercontent.com/2NbBZEf5FCS4xtbq8I1PsGIa4JcqJixR2KWGGFh10SYmUxoerPW5cv7ZjrNGwSnAh5k" alt="" />
        <img  src={ec_logo} alt="Sponsor 2"/>

        <img  src={annapurna} alt="Sponsor 3"/>
        <img  src={zeeshan} alt="Sponsor 4"/>
        <img  src={gaana} alt="Sponsor 5"/>

         {/* Swiggy */}
          <Link to="https://www.swiggy.com/" >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png" 
              alt="Swiggy"
            />
          </Link>
        <img  src={cspgcl} alt="Sponsor 7"/>


        </div>
      </div>
    </div>
  );
}