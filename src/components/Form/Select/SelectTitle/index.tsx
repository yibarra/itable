import React, { FC } from 'react';
import styled from 'styled-components';

import ButtonArrow from '../../Buttons/ButtonArrow';

// select title div
const SelectTitleDiv = styled.div`
  cursor: pointer;
  float: left;
  padding: 5px;
  width: 100%;
  vertical-align: top;

  .text {
    letter-spacing: -0.02em;
  }
`;

// select title
const SelectTitle: FC<any> = ({ open, setOpen, theme, value }) => {
  // render
  return (
    <SelectTitleDiv onClick={() => setOpen(!open)}>
      <ButtonArrow
        open={open}
        setOpen={setOpen}
        theme={theme} />
      <span className="text">{value.name ? value.name : 'Select Option'}</span>
    </SelectTitleDiv>
  );
};

export default SelectTitle;