import React, { FC } from 'react';

import EConfigItem from '../EConfigItem';

import { IEConfigGrid } from './interfaces';

import { EConfigGridDiv } from './styles';

// EConfig grid
const EConfigGrid: FC<IEConfigGrid> = (props) => {
  const { difference, level, config, index } = props;

  // render
  return (
    <EConfigGridDiv>
      {config && config.map((item: any, key: number) =>
        <EConfigItem
          {...props}
          active={index < key}
          last={level === item}
          diff={difference}
          item={item}
          key={key} />)}
    </EConfigGridDiv>
  );
};

export default EConfigGrid;