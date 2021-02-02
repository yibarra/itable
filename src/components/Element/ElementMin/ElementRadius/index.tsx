import React, { FC } from 'react';

import { IElementRadius } from './interfaces';

import { ElementRadiusDiv } from './styles';

// element radius
const ElementRadius: FC<IElementRadius> = ({ atomicRadius, color }) => {
  // render
  return (
    <ElementRadiusDiv className="radius" style={{
      backgroundColor: color,
      height: Math.round((atomicRadius / 30) * Math.PI * 1.5),
      width: Math.round((atomicRadius / 30) * Math.PI * 1.5)
    }}>
    </ElementRadiusDiv>
  );
};

export default ElementRadius;