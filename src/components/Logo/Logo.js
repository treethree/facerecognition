import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import face from './face.png';
const Logo = () => {
  return (
    <div className = 'ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3"> <img style={{paddingTop: '10px' }} alt='logo' src= {face} width= {75} height ={75}/> </div>
      </Tilt>
    </div>
  );
}

export default Logo;
