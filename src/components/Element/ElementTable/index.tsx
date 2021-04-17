import React, { FC, useCallback } from 'react';
import UseLabels from '../../../uses/UseLabels';
import ElementTableItem from './ElementTableItem';

import { ElementTableContainer } from './styles';

// element table
const ElementTable: FC<any> = ({ element }) => {
  const { getLabel } = UseLabels();
  const { cpkHexColor } = element;

  // table
  const rows = useCallback((items: any[]) => {
    const rows = [];

    for (let i = 0; i < items.length; i += 2) {
      const oneColumn = items[i];
      const twoColumn = items[i+1];

      rows.push(<li
        className="row"
        key={i}
        style={{ animationDelay: `${((i) * 60) + 700}ms` }}>
        <ElementTableItem
          color={cpkHexColor}
          label={oneColumn.label}
          text={oneColumn.text}
          key={oneColumn.key} />
        {twoColumn instanceof Object &&
          <ElementTableItem
            color={cpkHexColor}
            label={twoColumn.label}
            text={twoColumn.text}
            key={twoColumn.key} />}
      </li>);
    }

    return rows;
  }, [ cpkHexColor ]);

  // post table
  const table = useCallback(() => {
    const items: any = [];

    if (element instanceof Object) {
      Object.keys(element).forEach((key: string, index: number) => {
        const text = element[key];
        const label = getLabel(key);

        if (label) {
          items.push({ label: label.label, text, key: index });
        }
      });
    }

    return rows(items);
  }, [ element, getLabel, rows ]);

  // render
  return (
    <ElementTableContainer>
      {element && table()}
    </ElementTableContainer>
  );
};

export default ElementTable;