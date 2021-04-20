import React, { FC } from 'react';

import EConfig from '../../EConfig';
import ElementDate from '../ElementDate';
import ElementTable from '../ElementTable';

import { IElementInfo } from './interfaces';

import { ElementSummaryP } from '../ElementSummary/styles';
import { ElementTitleHOne } from '../ElementTitle/styles';
import { ElementInfoContainer } from './styles';

// element info
const ElementInfo: FC<IElementInfo> = ({ element, color }) => {
  const { atomicNumber, shells, electronicConfiguration, name, summary, yearDiscovered } = element;

  // render
  return (
    <ElementInfoContainer>
      <ElementTitleHOne>{name}</ElementTitleHOne>
      <ElementDate text="Discovery Date" year={yearDiscovered} />
      <ElementSummaryP>{summary}</ElementSummaryP>
      <ElementTable element={element} />

      <EConfig
        atomicNumber={atomicNumber}
        shells={shells}
        color={color}
        eConfiguration={electronicConfiguration} />
    </ElementInfoContainer>
  );
};

export default ElementInfo;