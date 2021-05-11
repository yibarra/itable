import React, { FC } from 'react';

import ElementBlock from '../ElementBlock';

import { IElementGraph } from './interfaces';

import { ElementGraphDiv } from './styles';

// element graph
const ElementGraph: FC<IElementGraph> = ({
  element,
  color
}) => {
  // render
  return (
    <ElementGraphDiv>
      <ElementBlock
        element={element}
        color={color} />
    </ElementGraphDiv>
  );
};

export default ElementGraph;