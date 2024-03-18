import React, { useState } from 'react';
import { Link } from 'react-router-dom';



export default function UserGuide() {

  return (
    <>
      <div className='card'>
        <h1 className='displayHeader'>Welcome to Pixel Pals!</h1>
        <div className="petContainer">
          <div className='petCircle'></div>
        {/* transparent png of pet */}
        </div>
        <div className='guide-container'>
          <p className='guide-text'> 
            Embark on a delightful journey with your very own Pixel Pal. In a world where every pixel counts, your companionship and care can turn these digital critters into your best pals. Nurture them, play fun games, and watch them grow. Are you ready to meet your new pal?Here is how you play. 1. Adopt a pal. 2. Watch your Pal's health levels and take care of it within 48 hours, or you will have to adopt a new Pal.</p>
          <Link to="/signup" className='btn' id="btnLeft">Get Started</Link>
          <Link to="/login" className='btn' id="btnLeft">Login</Link>
        </div>
      </div>
    </>

  )
}




