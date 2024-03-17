import React, { useEffect } from 'react';
import pixelbat from '../assets/pixel-bat.png'

export default function NavBar() {

    useEffect(() => {
        // Initialize Materialize Sidenav
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {});
      }, []);

    const token = localStorage.getItem('id_token');
    if (!token) {
        return (
            <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    Pixel Pals
                    <img src={pixelbat} style={{height: '30px', position: 'relative', top: '4px', left: '12px' }}/>
                    </a>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down" id="navRight">
                    <li><a href='/login'>Login</a></li>
                    <li><a href='/signup'>Sign Up</a></li>
                </ul>
            </div>

            <ul className="sidenav" id="nav-mobile">
                <li>
                    <div className="sidenav-close right">
                        <i className="material-icons white-text text-darken-2" style={{ cursor: 'pointer' }}>close</i>
                    </div>
                </li>
                <div className='margin-top-50'></div>
                <li><a href='/login'>Login</a></li>
                <li><a href='/signup'>Sign Up</a></li>
            </ul>
        </nav>
        )
    }
 
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                    Pixel Pals
                    <img src={pixelbat} style={{height: '30px', position: 'relative', top: '4px', left: '12px' }}/>
                    </a>
                <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down" id="navRight">
                    <li><a href='/display'>Display</a></li>
                    <li><a href='/logout'>Logout</a></li>
                </ul>
            </div>

            <ul className="sidenav" id="nav-mobile">
                <li>
                    <div className="sidenav-close right">
                        <i className="material-icons white-text text-darken-2" style={{ cursor: 'pointer' }}>close</i>
                    </div>
                </li>
                <div className='margin-top-50'></div>
                <li><a href='/display'>Display</a></li>
                <li><a href='/logout'>Logout</a></li>
            </ul>
        </nav>
    )
}

