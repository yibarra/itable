import React, { FC } from 'react';
import styled from 'styled-components';

import SelectOption from '../SelectOption';

import { ITheme } from '../../../../providers/ThemeProvider/interfaces';

// select content div
const SelectContentDiv = styled.div`
  float: left;
  height: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  padding: 0 10px 0 30px;
  position: absolute;
  top: calc(100% + 2px);
  width: 100%;
`;

// select content
const SelectContent: FC<any> = ({ items, onChange, open, theme }) => {
  const { text_color }: ITheme = theme;

  // render
  return (
    <SelectContentDiv
      style={{ backgroundColor: text_color }}>
      {items && items.map((item: any, index: number) =>
        <SelectOption
          item={item}
          onChange={onChange}
          theme={theme}
          key={index} />)}
    </SelectContentDiv>
  );
};

export default SelectContent;