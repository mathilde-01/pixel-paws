import React from 'react';
import { Link } from 'react-router-dom';
// import ThreeScene from './ThreeScene';
// import forest from '../assets/backgrounds/pet-backgrounds/forest.jpg'
// import desert from '../assets/backgrounds/pet-backgrounds/desert.jpg'
// import clouds from '../assets/backgrounds/pet-backgrounds/clouds.jpg'
// import underwater from '../assets/backgrounds/pet-backgrounds/underwater.jpg'

import '../styles/style.css'

export default function UserGuide() {
  // const [playAnimation, setPlayAnimation] = useState(false);
  // const [cleanAnimation, setCleanAnimation] = useState(false);
  // const [sleepAnimation, setSleepAnimation] = useState(false);
  // const [feedAnimation, setFeedAnimation] = useState(false);

  // let backgroundImage = '';
  // switch (pet.location) {
  //   case 'Forest':
  //     backgroundImage = `url(${forest})`;
  //     break;
  //   case 'Desert':
  //     backgroundImage = `url(${desert})`;
  //     break;
  //   case 'Clouds':
  //     backgroundImage = `url(${clouds})`;
  //     break;
  //   case 'Underwater':
  //     backgroundImage = `url(${underwater})`;
  //     break;
  //   default:
  //     // Default background image or fallback
  //     backgroundImage = `url(${forest})`;
  //     break;
  // }

  return (
    <>
      <div className='card'>
        <h1 className='displayHeader'>Welcome to Pixel Pals!</h1>
        <p className='guide-text'> Embark on a delightful journey with your very own Pixel Pal. In a world where every pixel counts, your companionship and care can turn these digital critters into your best pals. Nurture them, play fun games, and watch them grow. Are you ready to meet your new pal?Here is how you play. 1. Adopt a pal. 2. Watch your Pal's health levels and take care of it within 48 hours, or you will have to adopt a new Pal.</p>
        <Link to="/signup" className='btn' id="btnLeft">Get Started</Link>
        <Link to="/login" className='btn' id="btnLeft">Login</Link>
      </div>
      {/* <div className="petContainer">
        <div className="petCircle" style={{ backgroundImage }}>
          <ThreeScene playAnimation={playAnimation} feedAnimation={feedAnimation} sleepAnimation={sleepAnimation} cleanAnimation={cleanAnimation} />
        </div>
        <div className="petStand"></div>
      </div> */}
    </>

  )
}




