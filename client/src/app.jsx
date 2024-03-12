import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/style.css'

function App() {
    // The Outlet component will conditionally swap between the different pages according to the URL
    return (
        <>
       
            <main id="main">
                <Outlet />
                <Footer />
            </main>
            
        </>
    );
  }
  
  export default App;