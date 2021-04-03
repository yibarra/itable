import React, { FC, memo, useCallback } from 'react';

import ElementMin from '../Element/ElementMin';
import RowColumn from './RowColumn';

import { IGrid } from './interfaces';

import { GridDiv } from './styles';

// Grid
const Grid: FC<IGrid> = ({ elements, grid, setElement }) => {
  // get element
  const getElement = useCallback((x: number, y: number) =>
    grid.filter(({ xy }: any) => xy[0] === y && xy[1] === x)[0], [ grid ]);

  // get element table
  const getElementTable = useCallback((elements: any) => {
    if (elements instanceof Object === false) return false;

    const items = [];

    for (let key in elements) {
      const item = elements[key];

      if (item instanceof Object) {
        items.push(<RowColumn
          info={getElement(item.xpos, item.ypos)}
          xpos={item.xpos}
          ypos={item.ypos}
          key={key}>
          <ElementMin
            element={item}
            setElement={setElement} />
        </RowColumn>);
      }
    }

    return items;
  }, [ getElement, setElement ]);

  // render
  return (
    <GridDiv
      style={{ height: 67 * 9 }}>
      {elements instanceof Object && getElementTable(elements)}
    </GridDiv>
  );
};

export default memo(Grid);