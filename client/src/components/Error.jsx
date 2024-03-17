import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='displayContainer'>
      <h1 className='displayHeader'>Oops!</h1>
      <h2 className='guide-text'>404 - Page Not Found</h2>
      <p className='guide-text'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. If you have an account, you can sign in below or you can create an account by signing up:</p>
      <Link to="/signup" className='btn'>Get Started</Link>
      <Link to="/login" className='btn'>Login</Link>
    </div>
  );
};

export default ErrorPage;