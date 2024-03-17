import React, { useEffect } from 'react';
import pixelbat from '../assets/pixel-bat.png'

export default function NavBar() {

    useEffect(() => {
        // Initialize Materialize Sidenav
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
      }, []);
 
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    Pixel Pals
                    <img src={pixelbat} style={{height: '30px', position: 'relative', top: '4px', left: '12px' }}/>
                    </a>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down" id="navRight">
                    {['display', 'login', 'signup'].map((link, index) => (
                        <li key={index}><a href={`/${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a></li>
                    ))}
                    <li><a href='/petcreation'>Pet Creation</a></li>
                </ul>
            </div>

            <ul className="sidenav" id="nav-mobile">
                <li>
                    <div className="sidenav-close right">
                        <i className="material-icons black-text text-darken-2" style={{ cursor: 'pointer' }}>close</i>
                    </div>
                </li>
                <div className='margin-top-50'></div>
                {['display', 'login', 'signup'].map((link, index) => (
                    <li key={index}><a href={`/${link}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a></li>
                ))}
                <li><a href='/petcreation'>Pet Creation</a></li>
            </ul>
        </nav>
    )
}