import React, { FC } from 'react';

import EConfigItem from '../EConfigItem';

import { IEConfigGrid } from './interfaces';

import { EConfigGridDiv } from './styles';

// EConfig grid
const EConfigGrid: FC<IEConfigGrid> = ({ config, difference, level, index }) => {

  // render
  return (
    <EConfigGridDiv>
      {config && config.map((item: any, key: number) =>
        <EConfigItem
          active={index < key}
          last={level === item}
          diff={difference}
          item={item} key={key} />)}
    </EConfigGridDiv>
  );
};

export default EConfigGrid;