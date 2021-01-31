import React, { FC } from 'react';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import { ILoader } from './interfaces';

import { LoaderContainer } from './styles';

// loader
const Loader: FC<ILoader> = ({ isLoading }) => {
  // render
  return (
    <LoaderContainer data-active={!isLoading}>
      <Logo />
    </LoaderContainer>
  );
};

export default Loader;