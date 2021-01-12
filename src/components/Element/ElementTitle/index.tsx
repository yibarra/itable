import React, { FC } from 'react';

import { IElementTitle } from './interfaces';

import { ElementTitleHOne } from './styles';

// element title
const ElementTitle: FC<IElementTitle> = ({ text }) => {
  return (
    <ElementTitleHOne>
      {text}
    </ElementTitleHOne>
  );
};

export default ElementTitle;