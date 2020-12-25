import React, { FC } from 'react';
import styled from 'styled-components';
import { ITheme } from '../../../../providers/ThemeProvider/interfaces';

import ButtonArrow from '../../Buttons/ButtonArrow';

// select title div
const SelectTitleDiv = styled.div`
  cursor: pointer;
  border-radius: 12px;
  float: left;
  padding: 5px 5px 7px;
  width: 100%;
  vertical-align: top;

  .text {
    float: left;
    font-size: 12px;
    letter-spacing: 0.02em;
    line-height: 1em;
    padding-left: 5px;
  }

  button {
    right: 0;
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

// select title
const SelectTitle: FC<any> = ({ open, setOpen, theme, value }) => {
  const { background_color, text_color }: ITheme = theme;

  // render
  return (
    <SelectTitleDiv
      onClick={() => setOpen(!open)}
      style={{ backgroundColor: text_color }}>
      <ButtonArrow
        open={open}
        setOpen={setOpen}
        theme={theme} />
      <span
        className="text"
        style={{ color: background_color }}>{value.name ? value.name : 'Select Option'}</span>
    </SelectTitleDiv>
  );
};

export default SelectTitle;