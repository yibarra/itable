import React, { FC } from 'react';

import { IElementRadioActive } from './interfaces';

import { ElementRadioActiveDiv } from './styles';

// element radio active
const ElementRadioActive: FC<IElementRadioActive> = ({ active, color }) => {
  // render
  return (<ElementRadioActiveDiv
    data-active={active}
    color={color}>
    <span style={{ color }}>&#x2622;</span>
  </ElementRadioActiveDiv>);
};

export default ElementRadioActive;