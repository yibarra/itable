import React, { FC, useCallback, useContext } from 'react';

import ElementMin from '../Element/ElementMin';
import RowColumn from './RowColumn';

import { IGrid } from './interfaces';

import { GridContainer } from './styles';
import { FiltersContext } from '../../providers/FiltersProvider';

// Grid
const Grid: FC<IGrid> = ({ elements, grid }) => {
  const { filters } = useContext(FiltersContext);

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
            <RowColumn
              blocks={filters?.blocks}
              info={info}
              empty={!item}
              key={indexes}>
              <ElementMin {...item} index={indexes} />
            </RowColumn>);
        } else {
          items.push(
            <RowColumn
              info={info}
              empty={true}
              key={indexes}>
              <ElementMin empty={true} index={indexes} />
            </RowColumn>);
        }

        indexes = indexes + 1;
      }
    }

    return items;
  }, [ getElement, grid, filters ]);

  // render
  return (
    <GridContainer>
      {elements instanceof Object && elements.length > 0 && getElementTable(elements)}
    </GridContainer>
  );
};

export default Grid;