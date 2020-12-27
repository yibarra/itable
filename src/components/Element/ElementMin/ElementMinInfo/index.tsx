import React, { FC } from 'react';
import styled from 'styled-components';

// element min info div
const ElementMinInfoDiv = styled.div<any>`
  float: left;
  overflow: hidden;
  width: 100%;

  .atomic-number,
  .name,
  .symbol {
    color: inherit;
    float: left;
    line-height: 1em;
    text-align: center;
    width: 100%;
  }

  .atomic-number {
    font-size: 9px;
    right: 5px;
    position: absolute;
    text-align: right;
    top: 5px;
    width: auto;
  }

  .name {
    font-size: 9px;
    margin: 0 0 2px;
    line-height: 1.4em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .symbol {
    font-size: 20px;
    margin: 0 0 6px;
  }

  @media(max-width: 768px) {
    .name {
      display: none;
    }
  }

  @media(max-width: 480px) {
    .name {
      display: inline-block;
    }
  }
`;

// element min info
const ElementMinInfo: FC<any> = ({ atomicNumber, name, symbol, theme }) => {
  // render
  return (
    <ElementMinInfoDiv>
      <span className="atomic-number">{atomicNumber < 10 ? `0${atomicNumber}` : atomicNumber }</span>
      <span className="symbol">{symbol}</span>
      <span className="name">{name}</span>
    </ElementMinInfoDiv>
  );
};

export default ElementMinInfo;