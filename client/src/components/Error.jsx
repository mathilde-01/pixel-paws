import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='displayContainer'>
      <h2 className='guide-text'>404 - Page Not Found</h2>
      <p className='guide-text'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. If you have an account, you can sign in below or you can create an account by signing up:</p>
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '80px'}}>
        <Link to="/signup" className='btn' style={{marginRight: '10px'}}>Get Started</Link>
        <Link to="/login" className='btn'>Login</Link>
      </div>
    </div>
  );
};

export default ErrorPage;