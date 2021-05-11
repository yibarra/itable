import React, { FC } from 'react';

import EConfig from '../../EConfig';
import ElementDate from '../ElementDate';
import ElementTable from '../ElementTable';

import { IElementInfo } from './interfaces';

import { ElementSummaryP } from '../ElementSummary/styles';
import { ElementTitleHOne } from '../ElementTitle/styles';
import { ElementInfoContainer } from './styles';
import ElementLink from '../ElementLink';

// element info
const ElementInfo: FC<IElementInfo> = ({ element, color }) => {
  const {
    atomicNumber,
    shells,
    electronicConfiguration,
    name,
    source,
    spectral_img,
    summary,
    yearDiscovered
  } = element;

  // render
  return (
    <ElementInfoContainer>
      <ElementTitleHOne>{name}</ElementTitleHOne>
      <ElementDate text="Discovery Date" year={yearDiscovered} />
      <ElementSummaryP>{summary}</ElementSummaryP>
      <ElementTable element={element} />

      <div className="sources">
        {source &&
          <ElementLink text="Source" link={source} />}

        {spectral_img &&
          <ElementLink text="Spectral Image" link={spectral_img} />}
      </div>

      <EConfig
        atomicNumber={atomicNumber}
        shells={shells}
        color={color}
        eConfiguration={electronicConfiguration} />
    </ElementInfoContainer>
  );
};

export default ElementInfo;