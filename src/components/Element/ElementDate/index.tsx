import React, { FC } from 'react';
import { IElementDate } from './interfaces';

import { ElementDateContainer } from './styles';

// element date
const ElementDate: FC<IElementDate> = ({ text, year }) => {
  return (
    <ElementDateContainer>
      <span className="text">{text}</span>
      <span className="date">{year}</span>
    </ElementDateContainer>
  );
};

export default ElementDate;