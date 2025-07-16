import React from 'react';
import './RingSelector.css';

type RingSelectorProps = {
  count: number;
  selected: number;
  onSelect: (idx: number) => void;
};

export const RingSelector: React.FC<RingSelectorProps> = ({ count, selected, onSelect }) => {
  const dots = Array.from({ length: count }, (_, i) => {
    const angleDeg = (360 / count) * i;
    const angleRad = (angleDeg * Math.PI) / 180;
    const x = 50 + 50 * Math.cos(angleRad);
    const y = 50 + 50 * Math.sin(angleRad);

    return (
      <div
        key={i}
        className={`dot ${selected === i ? 'selected' : ''}`}
        style={{ left: `${x}%`, top: `${y}%` }}
        onClick={() => onSelect(i)}
      />
    );
  });

  return <div className="ring">{dots}</div>;
};