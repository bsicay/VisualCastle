// src/components/plainModel.jsx
import React from 'react';
import castleLogo from '~/assets/castle.png';

export default function PlainModel() {
  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      overflow: 'hidden',
      width: '45vw',
      height: '100vh',
      pointerEvents: 'none',
      /* máscara que difumina arriba y abajo */
      maskImage: 'linear-gradient(to top, transparent, black 20%, black 80%, transparent)',
      WebkitMaskImage: 'linear-gradient(to top, transparent, black 20%, black 80%, transparent)',
    }}>
      <img
        src={castleLogo}
        alt="Castle Logo"
        style={{
          width: '200%',      // solo se ve la mitad
          height: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
}
