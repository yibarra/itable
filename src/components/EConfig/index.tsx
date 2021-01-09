import React, { FC, useCallback } from 'react';

import EConfigGrid from './EConfigGrid';

import { EConfigDiv } from './styles';

const config = [
  { level: 1, name: 's', pos: { x: 1, y: 1 } },
  { level: 2, name: 's', pos: { x: 1, y: 2 } },
  { level: 2, name: 'p', pos: { x: 2, y: 2 } },
  { level: 3, name: 's', pos: { x: 1, y: 3 } },
  { level: 3, name: 'p', pos: { x: 2, y: 3 } },
  { level: 4, name: 's', pos: { x: 1, y: 4 } },
  { level: 3, name: 'd', pos: { x: 3, y: 3 } },
  { level: 4, name: 'p', pos: { x: 2, y: 4 } },
  { level: 5, name: 's', pos: { x: 1, y: 5 } },
  { level: 4, name: 'd', pos: { x: 3, y: 4 } },
  { level: 5, name: 'p', pos: { x: 2, y: 5 } },
  { level: 6, name: 's', pos: { x: 1, y: 6 } },
  { level: 4, name: 'f', pos: { x: 4, y: 4 } },
  { level: 5, name: 'd', pos: { x: 3, y: 5 } },
  { level: 6, name: 'p', pos: { x: 2, y: 6 } },
  { level: 7, name: 's', pos: { x: 1, y: 7 } },
  { level: 5, name: 'f', pos: { x: 4, y: 5 } },
  { level: 6, name: 'd', pos: { x: 3, y: 6 } },
  { level: 7, name: 'p', pos: { x: 2, y: 7 } }
];

// e config
const EConfig: FC<any> = ({ atomicNumber }) => {
  // get value
  const getValue = useCallback((name: string): number => {
    switch (name) {
      case 'f':
        return 14;
      case 'd':
        return 10;
      case 'p':
        return 6;
      case 's':
      default:
        return 2;
    }
  }, []);

  // get item
  const getItem = useCallback((x: number, min: number, max: number) =>
    ((x-min) * (x-max) <= 0), []);

  // get config
  const getConfig = useCallback((config: any[]) => {
    const elements = config;
    let level: any;
    let count: number = 0;

    for (let i = 0; i < config.length; i++) {
      const item = config[i];
      const value = getValue(item.name);

      if (item instanceof Object) {
        count = count + value;
        const diff = (count - atomicNumber);

        if ((count + Math.abs(diff) >= atomicNumber)) {
          if (getItem(count, count + Math.abs(diff), atomicNumber)) {
            level = item;
            break;
          }
        }
      }
    }

    return elements.indexOf(level);
  }, [ atomicNumber, getValue, getItem ]);

  // render
  return (
    <EConfigDiv>
      <EConfigGrid config={config} index={getConfig(config)} />
    </EConfigDiv>
  );
};

export default EConfig;