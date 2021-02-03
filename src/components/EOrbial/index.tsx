import React, { FC, useCallback } from 'react';

import { IEOrbital } from './interfaces';

import { EOrbitalDiv } from './styles';

// e orbital
const EOrbital: FC<IEOrbital> = ({ shells, radius }) => {
  // atoms
  const atoms = useCallback((value: number, key: number, size: number) => {
    const atoms = [];

    for (let i = 0; i < value; i++) {
      const angle = i * (Math.PI * 2) / value;
      const x = Math.cos(angle) * size;
      const y = Math.sin(angle) * size;
        
      atoms.push(<span
        className="atom"
        style={{
          transform: `rotate(${angle}deg) translate(${x}px, ${y}px)`
        }}
        key={`${i}-${key}`}></span>);
    }

    return atoms;
  }, []);

  // orbits
  const orbits = useCallback(() => {
    const items: any = [];

    for (let i = 0; i < shells.length; i++) {
      const size = radius * (i + 1);

      items.push(<div
        className="orbit"
        data-active={false}
        data-level={i}
        key={i}
        style={{ 
          width: size,
          height: size,
          animationDelay: `${(i) * 350}ms`
        }}>
          {atoms(shells[i], i, Math.round(size / 2))}
        </div>);
    }

    return items;
  }, [ shells, atoms, radius ]);

  // render
  return (
    <EOrbitalDiv
      style={{
        height: Math.floor(shells.length * radius)
      }}>
      {shells && orbits()}
    </EOrbitalDiv>
  );
};

export default EOrbital;