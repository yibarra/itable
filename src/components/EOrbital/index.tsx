import React, { FC, useCallback } from 'react';

import { IEOrbital } from './interfaces';

import { EOrbitalDiv } from './styles';

// e orbital
const EOrbital: FC<IEOrbital> = ({ atomicNumber, level }) => {
  // atoms
  const atoms = useCallback((limit: number, key: number, size: number, count: number) => {
    const atoms = [];

    const lastOrbit = key === (level.level - 1);
    const all = lastOrbit ? atomicNumber - count : limit;

    for (let i = 0; i < all; i++) {
      const angle = i * ((Math.PI * 2) / all);
      const x = Math.cos(angle) * size;
      const y = Math.sin(angle) * size;
        
      atoms.push(<span
        className="atom"
        style={{ transform: `rotate(${angle}deg) translate(${x}px, ${y}px)` }}
        key={`${i}-${key}`}></span>);
    }

    return atoms;
  }, [ level, atomicNumber ]);

  // orbits
  const orbits = useCallback(() => {
    let count = 0;
    const items: any = [];
    const limits: any = [ 2, 8, 18, 32, 32, 18, 8 ];

    for (let i = 0; i < level.level; i++) {
      const size = 30 * (i + 1);

      items.push(<div
        className="orbit"
        data-active={level.level <= i}
        data-level={i}
        key={i}
        style={{ width: size, height: size }}>
          {atoms(limits[i], i, size / 2, count)}
        </div>);
      
      count = count + limits[i];
    }

    return items;
  }, [ level, atoms ]);

  // render
  return (
    <EOrbitalDiv>{orbits()}</EOrbitalDiv>
  );
};

export default EOrbital;