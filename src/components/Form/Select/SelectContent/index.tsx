import React, { FC } from 'react';
import { useSpring, animated as a } from 'react-spring';
import styled from 'styled-components';

import SelectOption from '../SelectOption';

import { ITheme } from '../../../../providers/ThemeProvider/interfaces';

// select content div
const SelectContentDiv = styled(a.div)`
  border: none;
  border-radius: 0 0 6px 6px;
  float: left;
  height: 0;
  left: 0;
  overflow: hidden;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  top: 100%;
  width: 100%;
`;

// select content
const SelectContent: FC<any> = ({ items, onChange, open, theme, value }) => {
  const { text_color }: ITheme = theme;
  const props = useSpring({ height: open ? 200 : 0 });

  // render
  return (
    <SelectContentDiv
      style={{ 
        backgroundColor: text_color,
        ...props 
      }}>
      {items && items.map((item: any, index: number) =>
        <SelectOption
          active={item === value}
          item={item}
          onChange={onChange}
          theme={theme}
          key={index} />)}
    </SelectContentDiv>
  );
};

export default SelectContent;