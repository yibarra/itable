import React, { FC, useCallback, useRef } from 'react';
import { useSpring } from 'react-spring';
import UseDimension from '../../../uses/UseDimension';

import { IRowColumn } from './interfaces';

import { RowColumnDiv } from './styles';

// row column
const RowColumn: FC<IRowColumn> = ({ blocks, info, children, xpos, ypos }) => {
  const { y, opacity }: any = useSpring({
    to: { y: 0, opacity: 1 },
    from: { y: 100, opacity: 0 },
    delay: xpos * 120
  });

  const element = useRef<any>(null);
  const { height, width } = UseDimension(element);

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
    <RowColumnDiv
      ref={element}
      style={{
        left: `${Math.floor(width * (xpos - 1))}px`,
        top: `${Math.floor(height * (ypos - 1))}px`,
        opacity: opacity.interpolate((value: any) => value),
        transform: y.interpolate((value: any) => `translate(0px, ${value}%)`)
      }}>
      <>
        {typePosition()}
        {children}
      </>
    </RowColumnDiv>
  );
};

export default RowColumn;