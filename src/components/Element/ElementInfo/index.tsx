import React, { FC } from 'react';
import ElementDate from '../ElementDate';
import ElementSummary from '../ElementSummary';

import { ElementInfoContainer } from './styles';

// element info
const ElementInfo: FC<any> = ({ element }) => {
  const { summary, name, yearDiscovered } = element;

  // render
  return (
    <ElementInfoContainer>
      <h1>{name}</h1>
      <ElementDate text="Data discovery" year={yearDiscovered} />
      <ElementSummary text={summary} />
    </ElementInfoContainer>
  );
};

export default ElementInfo;