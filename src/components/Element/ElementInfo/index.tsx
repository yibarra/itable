import React, { FC } from 'react';

import ElementDate from '../ElementDate';
import ElementLink from '../ElementLink';
import ElementTable from '../ElementTable';

import { IElementInfo } from './interfaces';

import { ElementSummaryP } from '../ElementSummary/styles';
import { ElementTitleHOne } from '../ElementTitle/styles';
import { ElementInfoContainer } from './styles';

// element info
const ElementInfo: FC<IElementInfo> = ({ element }) => {
  const { name, summary, spectral_img, source, yearDiscovered } = element;

  // render
  return (
    <ElementInfoContainer>
      <ElementTitleHOne>{name}</ElementTitleHOne>
      <ElementDate text="Data discovery" year={yearDiscovered} />
      <ElementSummaryP>{summary}</ElementSummaryP>
      <ElementTable element={element} />

      {source &&
        <ElementLink text="Source" link={source} />}

      {spectral_img &&
        <ElementLink text="Spectra Image" link={spectral_img} />}
    </ElementInfoContainer>
  );
};

export default ElementInfo;