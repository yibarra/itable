import React, { FC, useCallback } from 'react';

import { IRowColumn } from './interfaces';

import { RowColumnContainer } from './styles';

// row column
const RowColumn: FC<IRowColumn> = ({ blocks, info, children, empty }) => {
  // type position
  const typePosition = useCallback(() => {
    if (info instanceof Object && blocks === true) {
      const { position, xy } = info;

      switch (position) {
        case 'left':
          return <p className="label l">{xy[0]}</p>;
        case 'left,top':
          return <>
            <p className="label l">{xy[0]}</p>
            <p className="label t">{xy[1]}</p>
          </>;
        case 'left,extra':
          return <p className="label e"></p>;
        case 'top':
        default:
          return <p className="label t">{xy[1]}</p>;
      }
    }

    return false;
  }, [ info, blocks ]);

  // render
  return (
    <RowColumnContainer data-empty={empty}>
      <>
        {typePosition()}
        {children}
      </>
    </RowColumnContainer>
  );
};

export default RowColumn;