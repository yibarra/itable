import React, { FC, useCallback } from 'react';

import ElementMin from '../Element/ElementMin';
import RowColumn from './RowColumn';

import { IGrid } from './interfaces';

import { GridContainer } from './styles';

// Grid
const Grid: FC<IGrid> = ({ elements, grid }) => {
  // get element
  const getElement = useCallback((x: number, y: number) => {
    if (elements instanceof Object === false) return false;

    return elements.filter((item: any) =>
      item.xpos === parseInt(y.toString(), 10) && item.ypos === parseInt(x.toString(), 10))[0];
  }, [ elements ]);

  // get element table
  const getElementTable = useCallback((elements: any) => {
    if (elements instanceof Object === false) return false;

    let indexes = 0;
    const items = [];

    for (let indexRow = 1; indexRow <= 10; indexRow++) {
      for (let indexColumn = 1; indexColumn <= 18; indexColumn++) {
        const item = getElement(indexRow, indexColumn);
        const info = grid.filter(({ xy }) => xy[0] === indexRow && xy[1] === indexColumn)[0];
        
        if (item instanceof Object) {
          items.push(
            <RowColumn info={info} key={indexes}>
              <ElementMin {...item} index={indexes} />
            </RowColumn>);
        } else {
          items.push(
            <RowColumn info={info} key={indexes}>
              <ElementMin empty={true} index={indexes} />
            </RowColumn>);
        }

        indexes = indexes + 1;
      }
    }

    return items;
  }, [ getElement, grid ]);

  // render
  return (
    <GridContainer>
      {elements instanceof Object && elements.length > 0
        && getElementTable(elements)}
    </GridContainer>
  );
};

export default Grid;