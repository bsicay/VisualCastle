import React from 'react';
import castleLogo from '~/assets/castle.png';

// Logo component positioned to show only half of the image on the right side
export const PlainModel = () => (
  <div style={{
    position: 'fixed',
    // static | relative | absolute | sticky | fixed
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
    overflow: 'hidden',
    width: '50vw',
    height: 'auto',
    pointerEvents: 'none', // make non-interactive
  }}>
    <img
      src={castleLogo}
      alt="Castle Logo"
      style={{
        width: '200%', // twice container width, so only half visible
        height: 'auto',
        display: 'block',
      }}
    />
  </div>
);

export default PlainModel;