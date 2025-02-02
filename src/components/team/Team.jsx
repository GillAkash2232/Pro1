import React from 'react'
import "./Team.css"
import logo12 from "../../assets/Team2.jpg"
import logo10 from "../../assets/team1.jpg"
import logo11 from "../../assets/one.jpg"

const Team = () => {
  return (
    <> 
    <div className='w-full h-160' id='addimg' >
        
         <h1 className='head'>Meet With Our Creative Dedicated Team</h1>
          
         <div class="team-container">
        <div class="team-block">
            <img src={logo10} alt="Member 1"/>
            <h3>Gurpreet Sarangal</h3>
            <p>Backend Developer</p>
        </div>
        <div class="team-block">
        <img src={logo11} alt="Member 1"/>
        <h3>Akash Gill</h3>
            <p>UI/UX Designer</p>
        </div>
        <div class="team-block">
        <img src={logo12} alt="Member 1"/>
        <h3>Shaksi</h3>
            <p>Frontend developer</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Team
