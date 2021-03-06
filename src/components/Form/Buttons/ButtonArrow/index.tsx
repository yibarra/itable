import React, { FC } from 'react';

import { IButtonArrow } from './interfaces';

import { ButtonArrowButton } from './styles';

// button arrow
const ButtonArrow: FC<IButtonArrow> = ({ open, setOpen }) => {
  // render
  return (
    <ButtonArrowButton
      onClick={() => setOpen(!open)}
      data-active={open}>
      <span
        className="material-icons">{!open ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}</span>
    </ButtonArrowButton>
  );
};

export default ButtonArrow;