import React, { FC } from 'react';

import ElementDate from '../ElementDate';
import ElementLink from '../ElementLink';
import ElementSummary from '../ElementSummary';
import ElementTable from '../ElementTable';
import ElementTitle from '../ElementTitle';

import { ElementInfoContainer } from './styles';

// element info
const ElementInfo: FC<any> = ({ element }) => {
  const { name, summary, spectral_img, source, yearDiscovered } = element;

  // render
  return (
    <ElementInfoContainer>
      <ElementTitle text={name} />
      <ElementDate text="Data discovery" year={yearDiscovered} />
      <ElementSummary text={summary} />
      <ElementTable element={element} />

      {source && <ElementLink text="Source" link={source} />}
      {spectral_img && <ElementLink text="Spectra Image" link={spectral_img} />}
    </ElementInfoContainer>
  );
};

export default ElementInfo;