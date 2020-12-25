import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

import ElementMin from '../Element/ElementMin';

// Grid Div
const GridDiv = styled.div`
  margin: 0;
  max-width: 1140px;
  padding: 0 20px;
  position: relative;
  width: 100%;
`;

// Grid
const Grid: FC<any> = ({ elements, blockFilter, stateFilter }) => {
  // get element
  const getElement = useCallback((x: number, y: number) => {
    if (elements instanceof Object === false) return false;

    return elements.filter((item: any) => item.xpos === parseInt(y.toString(), 10) && item.ypos === parseInt(x.toString(), 10))[0];
  }, [ elements ]);

  // get element table
  const getElementTable = useCallback((elements: any) => {
    if (elements instanceof Object === false) return false;

    let indexes = 0;
    const items = [];

    for (let indexRow = 1; indexRow <= 10; indexRow++) {
      for (let indexColumn = 1; indexColumn <= 18; indexColumn++) {
        const item = getElement(indexRow, indexColumn);
        
        if (item instanceof Object) {
          items.push(<ElementMin
            {...item}
            blockFilter={blockFilter}
            stateFilter={stateFilter}
            index={indexes}
            xpos={indexRow + 1}
            ypos={indexColumn + 1}
            key={indexes} />);
        } else {
          items.push(<ElementMin
            empty={true}
            index={indexes}
            xpos={indexRow + 1}
            ypos={indexColumn + 1}
            key={indexes} />);
        }

        indexes = indexes + 1;
      }
    }

    return items;
  }, [ stateFilter, getElement, blockFilter ]);

  // render
  return (
    <GridDiv>
      {elements instanceof Object && elements.length > 0 && getElementTable(elements)}
    </GridDiv>
  );
};

export default Grid;