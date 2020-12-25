import React, { FC } from 'react';
import styled from 'styled-components';

import { IButtonArrow } from './interfaces';

// button arrow button
const ButtonArrowButton = styled.button`
  background-color: transparent;
  border: none;
  height: 20px;
  outline: none;
  line-height: 1em;
  padding: 0;
  position: relative;
  width: 30px;

  .triangle {
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-top: 10px solid transparent;
    height: 0;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
  }

  &[data-active="true"] {
    .triangle {
      transform: translate(-50%, -50%) rotate(180deg);
    }
  }
`;

// button arrow
const ButtonArrow: FC<IButtonArrow> = ({ open, setOpen, theme }) => {
  // render
  return (
    <ButtonArrowButton
      onClick={() => setOpen(!open)}
      data-active={open}>
      <span
        className="triangle"
        style={{ borderTopColor: theme.background_color }}></span>
    </ButtonArrowButton>
  );
};

export default ButtonArrow;