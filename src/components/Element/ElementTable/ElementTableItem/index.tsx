import React, { FC } from 'react';
import { IElementTableItem } from './interfaces';
import { ElementTableItemContainer } from './styles';

const ElementTableItem: FC<IElementTableItem> = ({ color, label, text }) => {
  // render
  return (
    <ElementTableItemContainer style={{ color }}>
      <span className="label">{label}</span>
      <span className="text">{text}</span>
    </ElementTableItemContainer>
  );
};

export default ElementTableItem;