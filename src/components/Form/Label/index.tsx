import React, { FC } from 'react';

import { ILabel } from './interfaces';

import { LabelTextContainer } from './styles';

// label
const Label: FC<ILabel> = ({ text }) => {
  // render
  return (<LabelTextContainer>{text}</LabelTextContainer>);
};

export default Label;