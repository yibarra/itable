import React, { FC } from 'react';

import EConfigItem from '../EConfigItem';

import { IEConfigGrid } from './interfaces';

import { EConfigGridDiv } from './styles';

// EConfig grid
const EConfigGrid: FC<IEConfigGrid> = ({ config, index }) => {

  // render
  return (
    <EConfigGridDiv>
      {config && config.map((item: any, key: number) =>
        <EConfigItem active={index > key} item={item} key={key} />)}
    </EConfigGridDiv>
  );
};

export default EConfigGrid;