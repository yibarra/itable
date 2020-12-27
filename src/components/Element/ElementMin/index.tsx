import React, { FC } from 'react';
import styled from 'styled-components';

import ElementMinInfo from './ElementMinInfo';

import { IElementMin } from './interfaces';

// element min div
const ElementMinDiv: any = styled.div<IElementMin>`
  align-content: flex-end;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  flex-flow: row wrap;
  height: ${({ index }) => index >= 126 && index < 144 ? `${40}px` : `${65}px` };
  float: left;
  margin: 1px;
  overflow: hidden;
  padding: 5px;
  position: relative;
  text-align: center;
  transition: all 800ms cubic-bezier(.19,.68,.31,.81);
  width: calc((100% / 18) - 2px);
  vertical-align: top;

  &:hover {
    background-color: ${(props) => { console.log(props); return 'red'; } };
  }

  @media(max-width: 768px) {
    height: 50px;
  }

  @media(max-width: 480px) {
    height: 60px;
    width: calc(25% - 2px);
    
    &[data-empty="true"] {
      display: none;
    }
  }
`;

// element min
const ElementMin: FC<IElementMin> = ({
  atomicNumber,
  cpkHexColor,
  name,
  symbol,
  empty,
  theme
}) => {
  // render
  return (
    <ElementMinDiv
      data-empty={empty}
      style={{
        borderColor: cpkHexColor,
        color: cpkHexColor
      }}>
      {!empty && <ElementMinInfo
        atomicNumber={atomicNumber}
        name={name}
        symbol={symbol}
        theme={theme} />}
    </ElementMinDiv>
  );
};

export default ElementMin;