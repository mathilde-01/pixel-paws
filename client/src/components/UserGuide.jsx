import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pixelPal from '../assets/pixel-pal/pixelpal.png';



export default function UserGuide() {

  return (
    <>
     <h1 className='userGuideHeader'>Welcome to Pixel Pals!</h1>
      <div className='card'>
        <div className="imageContainer">
            <img src={pixelPal} alt="Example Pal" className='pixelPal'/> 
        </div>
        <div className='guide-container'>
          <p className='guide-text'> 
            Embark on a delightful journey with your very own Pixel Pal. In a world where every pixel counts, your companionship and care can turn these digital critters into your best pals.<br/><br/>Are you ready to meet your new pal? Here is how to play: <br/>1. Adopt a pal- give it a name and a home {'<'}3 <br/>2. Watch your Pal's health levels and press the buttons to take care of it, or you will have to adopt a new Pal.</p>
            <div>
            <Link to="/signup" className='btn' style={{marginRight: '10px'}}>Get Started</Link>
          <Link to="/login" className='btn' >Login</Link>
            </div>
        </div>
      </div>
    </>

  )
}




