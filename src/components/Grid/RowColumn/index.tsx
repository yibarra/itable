import React, { FC, memo, useCallback, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSpring } from 'react-spring';

import UseDimension from '../../../uses/UseDimension';

import { IRowColumn } from './interfaces';

import { RowColumnDiv } from './styles';

// row column
const RowColumn: FC<IRowColumn> = ({
  active, 
  info,
  children,
  xpos,
  ypos
}) => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const element = useRef<any>(null);
  const { height, width } = UseDimension(element);
  
  const { y, opacity }: any = useSpring({
    to: {
      y: active ? 100 : 0,
      opacity: active ? 0 : 1
    },
    from: {
      y: active ? 0 : 100,
      opacity: active ? 1 : 0
    },
    config: {
      tension: 70,
      friction: 10
    },
    delay: !isMobile ? Math.abs((ypos - ((ypos / 2) * (xpos / 2))) + (ypos + 1)) * 40 : 0
  });

  // type position
  const typePosition = useCallback(() => {
    if (info instanceof Object) {
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
  }, [ info ]);

  // render
  return (
    <RowColumnDiv
      ref={element}
      style={{
        left: `${Math.floor(width * (xpos - 1))}px`,
        top: `${Math.floor(height * (ypos - 1))}px`,
        opacity: opacity.interpolate((value: any) => value),
        transform: !isMobile 
          ? y.interpolate((value: any) => `translate(0px, ${value}%)`) : 'none'
      }}>
      <>
        {typePosition()}
        {children}
      </>
    </RowColumnDiv>
  );
};

export default memo(RowColumn);