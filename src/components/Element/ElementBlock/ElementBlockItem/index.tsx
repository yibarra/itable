import React, { FC, useCallback } from 'react';

import { IElementBlockItem } from './interfaces';

import { P } from '../../../Typography/Text/styles';
import { ElementBlockItemDiv } from './styles';

// element block item
const ElementBlockItem: FC<IElementBlockItem> = ({
  color,
  label,
  value = ''
}) => {
  // format
  const format = useCallback(() => {
    switch (label?.name) {
      case 'Oxidation States':
        if (!value || value === '')  {
          return false;
        } else if (Number.isNaN(value) || value.toString().indexOf(', ') === -1) {
          return <span className="state">{value}</span>
        } else {
          const elements: any = [];
          const items = value.split(', ');
          
          items.map((item: string, index: number) =>
            elements.push(<span className="state" key={index}>{item}</span>));
  
          return elements;
        }
      default:
        return value;
    }
  }, [ label, value ]);

  // render
  return (
    <ElementBlockItemDiv
      data-type={label?.name.replace(' ', '-').toString().toLowerCase()}>
      
      <P className="label">
        <span className="arrow" style={{
          backgroundColor: color,
          borderColor: color
        }}></span>
        {label?.label}
      </P>

      <P className="value" style={{ color }}>{format()}</P>
    </ElementBlockItemDiv>
  );
};

export default ElementBlockItem;