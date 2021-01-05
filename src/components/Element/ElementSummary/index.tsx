import React, { FC } from 'react';

import { IElementSummary } from './interfaces';

import { ElementSummaryContainer } from './styles';

// element summary
const ElementSummary: FC<IElementSummary> = ({ text }) => {
  // render
  return (
    <ElementSummaryContainer>
      {text}
    </ElementSummaryContainer>
  );
};

export default ElementSummary;