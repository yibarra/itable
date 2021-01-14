import React, { FC } from 'react';
import { IElementDate } from './interfaces';

import { ElementDateP } from './styles';

// element date
const ElementDate: FC<IElementDate> = ({ text, year }) => {
  return (
    <ElementDateP>
      <span className="text">{text}</span>
      <span className="date">{year}</span>
    </ElementDateP>
  );
};

export default ElementDate;