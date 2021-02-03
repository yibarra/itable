import React, { FC, useCallback } from 'react';

import { IEConfigItem } from './interfaces';

import { EConfigItemDiv } from './styles';

// e config item
const EConfigItem: FC<IEConfigItem> = ({
  active,
  color,
  last,
  diff,
  item: { level, name, pos, value }
  }) => {
  const padding = 50;

  // get last number
  const quote = useCallback(() => {
    if (last) {
      const val = (diff - value);

      if (val < 0) return Math.abs(val);
    }

    return value;
  }, [ diff, value, last ]);

  // get position
  const getPosition = useCallback(() => {
    const x = (pos.x - 1) * padding;
    const y = (pos.y - 1) * padding;

    return `translate(${x}px, ${y}px)`;
  }, [ pos ]); 

  // render
  return (
    <EConfigItemDiv
      data-last={last}
      data-active={active}
      data-arrow={pos.x === 1}
      style={{ transform: getPosition() }}>
      <span className="quote">{quote()}</span>
      <span className="level">{level}</span>
      <span className="name" style={{ borderColor: color }}>{name}</span>
    </EConfigItemDiv>
  );
};

export default EConfigItem;