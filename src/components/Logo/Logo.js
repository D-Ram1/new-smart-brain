import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt5'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <div style={{height: '150px', width: '150px', backgroundColor: 'linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%)' }}>
            <img style={{paddingTop: '30px', paddingRight: '30px'}} alt='logo' src={brain}/>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
