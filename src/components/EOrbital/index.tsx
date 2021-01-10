import React, { FC, useCallback } from 'react';

import { IEOrbital } from './interfaces';

import { EOrbitalDiv } from './styles';

// e orbital
const EOrbital: FC<IEOrbital> = ({ atomicNumber, level }) => {
  // atoms
  const atoms = useCallback((limit: number, index: number, size: number) => {
    const atoms = [];
    const per = (Math.PI * 2) / limit;

    for (let i = 0; i < limit; i++) {
      const angle = i * per;
      const x = Math.cos(angle) * size;
      const y = Math.sin(angle) * size;
        
      atoms.push(<span
        className="atom"
        style={{ transform: `rotate(${angle}deg) translate(${x}px, ${y}px)` }}
        key={`${i}-${index}`}></span>);
    }

    return atoms;
  }, []);

  // orbits
  const orbits = useCallback(() => {
    const items: any = [];
    const limits: any = [ 2, 8, 18, 32, 32, 18, 8 ];

    console.log(atomicNumber, level.level);

    for (let i = 0; i < 7; i++) {
      const size = 30 * (i + 1);

      items.push(<div
        className="orbit"
        data-active={level.level < (i + 1)}
        data-level={i}
        key={i}
        style={{ width: size, height: size }}>
          {atoms(limits[i], i, size / 2)}
        </div>);
    }

    return items;
  }, [ atomicNumber, level, atoms ]);

  // render
  return (
    <EOrbitalDiv>{orbits()}</EOrbitalDiv>
  );
};

export default EOrbital;