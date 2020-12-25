import React, { FC } from 'react';
import styled from 'styled-components';

import { ILabel } from './interfaces';

// label text
const LabelText = styled.label`
  float: left;
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  font-weight: 400;
  margin: 0 0 10px;
  letter-spacing: 0.04em;
  line-height: 1em;
  position: relative;
  width: 100%;
`;

// label
const Label: FC<ILabel> = ({ text, theme }) => {
  const { text_color } = theme;

  // render
  return (<LabelText style={{ color: text_color }}>{text}</LabelText>);
};

export default Label;