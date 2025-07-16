import React, { useState, useEffect } from 'react';
import castleLogo from '~/assets/castle.png';

// Responsive logo component showing only half the image on the right side
export const PlainModel = () => {
  const [styleProps, setStyleProps] = useState({
    top: '0%',
    width: '45vw',
    height: '90vh',
    transform: 'translateY(5%)',
  });

  // transform: 'translateX(10%)'
  useEffect(() => {
    const updateStyle = () => {
      const w = window.innerWidth;
      if (w <= 600) {
        setStyleProps({ top: '0%', width: '80vw', height: '70vh', transform: 'translateY(20%) translateX(10%)' });
      } else if (w <= 1024) {
        setStyleProps({ top: '10%', width: '60vw', height: '70vh', transform: 'translateY(0)' });
      } else {
        setStyleProps({ top: '0%', width: '45vw', height: '90vh', transform: 'translateY(5%)' });
      }
    };
    updateStyle();
    window.addEventListener('resize', updateStyle);
    return () => window.removeEventListener('resize', updateStyle);
  }, []);

  return (
    <div
      style={{
        zIndex: -100,
        position: 'absolute',
        right: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        maskImage: 'linear-gradient(to top, transparent, black 20%, black 80%, transparent)',
        WebkitMaskImage: 'linear-gradient(to top, transparent, black 20%, black 80%, transparent)',
        top: styleProps.top,
        width: styleProps.width,
        height: styleProps.height,
        transform: styleProps.transform,
      }}
    >
      <img
        src={castleLogo}
        alt="Castle Logo"
        style={{ width: '200%', height: 'auto', display: 'block', zIndex: 2, }}
      />
    </div>
  );
};

export default PlainModel;
