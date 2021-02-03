import React, { FC } from 'react';

import EConfig from '../../EConfig';
import ElementBlock from '../ElementBlock';

import { IElementGraph } from './interfaces';

import { ElementGraphDiv } from './styles';

// element graph
const ElementGraph: FC<IElementGraph> = ({ element, color }) => {
  const { atomicNumber, electronicConfiguration, shells } = element;

  // render
  return (
    <ElementGraphDiv>
      <ElementBlock element={element} />

      <EConfig
        atomicNumber={atomicNumber}
        shells={shells}
        color={color}
        eConfiguration={electronicConfiguration} />
    </ElementGraphDiv>
  );
};

export default ElementGraph;