import React, { FC, memo, useCallback } from 'react';
import UseLabels from '../../../uses/UseLabels';

import ElementBlockItem from './ElementBlockItem';

import { IElementBlock } from './interfaces';

import { ElementBlockDiv } from './styles';

// element block
const ElementBlock: FC<IElementBlock> = ({ element, color }) => {
  const { getLabelBlock } = UseLabels();
  
  const { symbol } = element;

  // properties
  const properties = useCallback(() => {
    const items: any = [];

    if (element instanceof Object) {
      Object.keys(element).forEach((key: string, index: number) => {
        const text = element[key];
        const label = getLabelBlock(key);

        if (label) {
          items.push(<ElementBlockItem
            color={color}
            label={label}
            value={text}
            key={index} />);
        }
      });
    }

    return items;
  }, [ element, getLabelBlock, color ]);

  // render
  return (
    <ElementBlockDiv>
      {properties()}
      <div className="symbol" style={{ color }}>{symbol}</div>
    </ElementBlockDiv>
  );
};

export default memo(ElementBlock);