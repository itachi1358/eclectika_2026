import React from 'react'
import Squares from './Squares'
import { useNavigate } from 'react-router-dom'
import './Team_Page.css'
import TeamCard from './TeamCard'
// import vikas from "../../assets/vikas.png"


export default function Team_Page() {
  const navigate=useNavigate();
  return (
    <div className='complete_page'>
      <div className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </div>
      
      {/* Background */}
      <Squares 
        speed={0.5}
        squareSize={40}
        direction='up'
        borderColor=" rgba(69, 66, 254, 0.186)"
        hoverColor="#ffffff4c"
        size={40}
      />

      {/* Foreground Content */}
      <div className="team_content">
        <div className='heads'>
          <div className='title'>
            <h1>Head Coordinators</h1>
          </div>

          <div className='card-containery'>
            <TeamCard name="Vikas" 
                domain="Event Management" 
                branch="Computer Science and Engineering" 
                // image={vikas} 
                insta='https://www.instagram.com/rathan_07/' 
                ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />

                  <TeamCard name="Rathan" 
                domain="Event Management" 
                branch="Computer Science and Engineering" 
                // image={Rathan} 
                insta='https://www.instagram.com/rathan_07/' 
                ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />

                  <TeamCard name="Rathan" 
                domain="Event Management" 
                branch="Computer Science and Engineering" 
                // image={Rathan} 
                insta='https://www.instagram.com/rathan_07/' 
                ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />

                  <TeamCard name="Rathan" 
                domain="Event Management" 
                branch="Computer Science and Engineering" 
                // image={Rathan} 
                insta='https://www.instagram.com/rathan_07/' 
                ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />

                  <TeamCard name="Rathan" 
                domain="Event Management" 
                branch="Computer Science and Engineering" 
                // image={Rathan} 
                insta='https://www.instagram.com/rathan_07/' 
                ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />

                  <TeamCard name="Rathan" 
                domain="Event Management" 
                branch="Computer Science and Engineering" 
                // image={Rathan} 
                insta='https://www.instagram.com/rathan_07/' 
                ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />

                  <TeamCard name="Rathan" 
                domain="Event Management" 
                branch="Computer Science and Engineering" 
                // image={Rathan} 
                insta='https://www.instagram.com/rathan_07/' 
                ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />

                  <TeamCard name="Rathan" 
                domain="Event Management" 
                branch="Computer Science and Engineering" 
                // image={Rathan} 
                insta='https://www.instagram.com/rathan_07/' 
                ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />


                  <TeamCard name="Rathan" 
                domain="Event Management" 
                branch="Computer Science and Engineering" 
                // image={Rathan} 
                insta='https://www.instagram.com/rathan_07/' 
                ln='https://www.linkedin.com/in/lavudya-laxmi-rathan-shukla-a012b222a/' />
          </div>
        </div>
      </div>

    </div>
  )
}

