import React, { FC, useCallback } from 'react';

import { IEConfigItem } from './interfaces';

import { EConfigItemDiv } from './styles';

// e config item
const EConfigItem: FC<IEConfigItem> = ({ active, item: { level, name, pos } }) => {
  const padding = 50;

  // get position
  const getPosition = useCallback(() => {
    const x = (pos.x - 1) * padding;
    const y = (pos.y - 1) * padding;

    return `translate(${x}px, ${y}px)`;
  }, [ pos ]); 

  // render
  return (
    <EConfigItemDiv
      data-active={active}
      data-arrow={pos.x === 1}
      style={{ transform: getPosition() }}>
      <span className="level">{level}</span>
      <span className="name">{name}</span>
    </EConfigItemDiv>
  );
};

export default EConfigItem;