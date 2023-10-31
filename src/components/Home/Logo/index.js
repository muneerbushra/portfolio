import React, { useEffect, useRef, useState } from 'react';
import LogoS from '../../../assets/images/sideimg.png';
import './index.scss';

const Logo = () => {
  const solidLogoRef = useRef();
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      solidLogoRef.current.style.transition = 'opacity 2s';
      solidLogoRef.current.style.opacity = 1;

      setTimeout(() => {
        setAnimationComplete(true);
      }, 2000); 
    }, 4000); 
  }, []);

  return (
    <div className={`logo-container ${isAnimationComplete ? 'show-solid-logo' : ''}`}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript, Developer"
      />
    </div>
  );
};

export default Logo;
