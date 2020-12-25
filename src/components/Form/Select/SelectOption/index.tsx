import React, { FC } from 'react';
import styled from 'styled-components';

import { ITheme } from '../../../../providers/ThemeProvider/interfaces';
import { ISelectOption } from './interfaces';

// select options button
const SelectOptionButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 10px 15px;
  text-align: left;
  transition: background-color var(--animation-time) var(--animation);
  width: 100%;
  
  .name {
    font-size: 12px;
    font-weight: 400;
    float: left;
    letter-spacing: 0.02em;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    white-space: nowrap;
  }
`;

// select option
const SelectOption: FC<ISelectOption> = ({ active, onChange, item, theme }) => {
  const { name } = item;
  const { background_color, text_color }: ITheme = theme;

  // render
  return (
    <SelectOptionButton
      onClick={() => onChange(item)}
      style={{ backgroundColor: active === true ? background_color : text_color }}>
      <span className="name" style={{ color: active === true ? text_color : background_color }}>{name}</span>
    </SelectOptionButton>
  );
};

export default SelectOption;