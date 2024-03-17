import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style.css'

export default function UserGuide(){
    return (
    <div className='displayContainer'>
      <h1 className='displayHeader'>Welcome to Pixel Pals!</h1>
      <p className='guide-text'> Embark on a delightful journey with your very own Pixel Pal. In a world where every pixel counts, your companionship and care can turn these digital critters into your best pals. Nurture them, play fun games, and watch them grow. Are you ready to meet your new pal?</p>
      <Link to="/signup" className='btn'>Get Started</Link>
      <p className='guide-text'>Already signed up? Login Here:</p>
      <Link to="/login" className='btn'>Login</Link>
    </div>
    )
}