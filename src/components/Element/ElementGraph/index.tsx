import React, { FC } from 'react';

import ElementBlock from '../ElementBlock';
import ElementLink from '../ElementLink';

import { IElementGraph } from './interfaces';

import { ElementGraphDiv } from './styles';

// element graph
const ElementGraph: FC<IElementGraph> = ({ element }) => {
  const { source, spectral_img } = element;

  // render
  return (
    <ElementGraphDiv>
      <ElementBlock element={element} />

      {source &&
        <ElementLink text="Source" link={source} />}

      {spectral_img &&
        <ElementLink text="Spectra Image" link={spectral_img} />}
    </ElementGraphDiv>
  );
};

export default ElementGraph;