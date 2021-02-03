import React, { FC } from 'react';

import { ILabel } from './interfaces';

import { LabelTextLabel } from './styles';

// label
const Label: FC<ILabel> = ({ text }) => {
  // render
  return (<LabelTextLabel>{text}</LabelTextLabel>);
};

export default Label;