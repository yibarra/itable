import React, { FC } from 'react';
import styled from 'styled-components';

import Label from '../Label';

import { IInputGroup } from './interfaces';

// input group div
const InputGroupDiv = styled.div`

`;

// input group
const InputGroup: FC<IInputGroup> = ({ children, text, styles }) => {
  // render
  return (
    <InputGroupDiv>
      {<>
        <Label text={text} styles={styles} />
        {children}
      </>}
    </InputGroupDiv>
  );
};

export default InputGroup;