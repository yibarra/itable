import React, { FC } from 'react';
import styled from 'styled-components';

// element min div
const ElementMinDiv = styled.div`
  align-content: flex-end;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  flex-flow: row wrap;
  float: left;
  margin: 1px;
  overflow: hidden;
  padding: 5px;
  position: relative;
  text-align: center;
  transition: all 800ms cubic-bezier(.19,.68,.31,.81);
  width: calc((100% / 18) - 2px);
  vertical-align: top;

  .name,
  .symbol {
    float: left;
    line-height: 1em;
    text-align: center;
    width: 100%;
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
    margin: 0 0 8px;
  }
`;

// element min
const ElementMin: FC<any> = ({ cpkHexColor, index, name, symbol }) => {
  // render
  return (
    <ElementMinDiv style={{
      borderColor: cpkHexColor,
      height: index >= 126 && index < 144 ? 40 : 65 
    }}>
      <span className="symbol" style={{ color: cpkHexColor }}>{symbol}</span>
      <span className="name" style={{ color: cpkHexColor }}>{name}</span>
    </ElementMinDiv>
  );
};

export default ElementMin;