import React, { FC, useCallback, useContext } from 'react';

import ElementMin from '../Element/ElementMin';
import RowColumn from './RowColumn';

import { FiltersContext } from '../../providers/FiltersProvider';

import { IGrid } from './interfaces';

import { GridContainer } from './styles';

// Grid
const Grid: FC<IGrid> = ({ elements, grid, setElement }) => {
  const { filters } = useContext(FiltersContext);

  // get element
  const getElement = useCallback((x: number, y: number) => {
    return grid.filter(({ xy }: any) =>
      xy[1] === y && xy[0] === x)[0];
  }, [ grid ]);

  // get element table
  const getElementTable = useCallback((elements: any) => {
    if (elements instanceof Object === false) return false;

    const items = [];

    for (let key in elements) {
      const item = elements[key];

      if (item instanceof Object) {
        const info = getElement(item.xpos, item.ypos);

        items.push(<RowColumn
          blocks={filters?.blocks}
          info={info}
          xpos={item.xpos}
          ypos={item.ypos}
          key={key}>
          <ElementMin
            element={item}
            setElement={setElement} />
        </RowColumn>)
      }
    }

    return items;
  }, [ getElement, filters, setElement ]);

  // render
  return (
    <GridContainer>
      {elements instanceof Object && getElementTable(elements)}
    </GridContainer>
  );
};

export default Grid;