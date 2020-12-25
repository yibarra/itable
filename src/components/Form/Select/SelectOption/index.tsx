import React, { FC } from 'react';
import styled from 'styled-components';
import { ITheme } from '../../../../providers/ThemeProvider/interfaces';

import { ISelectOption } from './interfaces';

// select options button
const SelectOptionButton = styled.button`
  background: transparent;
  border: none;
  font-size: 12px;
  font-weight: 400;
  outline: none;
  padding: 10px 5px;
  letter-spacing: -0.02em;
  text-align: left;
  width: 100%;
`;

// select option
const SelectOption: FC<ISelectOption> = ({ onChange, item, theme }) => {
  const { name, value } = item;
  const { background_color }: ITheme = theme;

  // render
  return (
    <SelectOptionButton
      onClick={() => onChange(value)}
      style={{  }}>
      <span style={{ color: background_color }}>{name}</span>
    </SelectOptionButton>
  );
};

export default SelectOption;