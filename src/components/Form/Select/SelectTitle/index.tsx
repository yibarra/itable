import React, { FC } from 'react';

import ButtonArrow from '../../Buttons/ButtonArrow';

import { ISelectTitle } from './interfaces';

import { SelectTitleDiv } from './styles';

// select title
const SelectTitle: FC<ISelectTitle> = ({ open, setOpen, value }) => {
  // render
  return (
    <SelectTitleDiv
      onClick={() => setOpen(!open)}>
      <ButtonArrow
        open={open}
        setOpen={setOpen} />
        
      <span
        className="text">{value.name ? value.name : 'Select Option'}</span>
    </SelectTitleDiv>
  );
};

export default SelectTitle;