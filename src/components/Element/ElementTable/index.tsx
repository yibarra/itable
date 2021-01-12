import React, { FC, useCallback } from 'react';
import ElementTableItem from './ElementTableItem';

import { ElementTableContainer } from './styles';

// element table
const ElementTable: FC<any> = ({ element }) => {
  const { cpkHexColor } = element;

  // get label
  const getLabel = useCallback((label: any) => {
    switch (label) {
      case 'atomicMass':
        return 'Atomic Mass';
      case 'atomicNumber':
        return 'Atomic Number';
      case 'atomicRadius':
        return 'Atomic Radius';
      case 'boilingPoint':
        return 'Boiling Point';
      case 'bondingType':
        return 'Bonding Type';
      case 'density':
        return 'Density';
      case 'electronAffinity':
        return 'Electron Affinity';
      case 'electronegativity':
        return 'Electro-Negativity';
      case 'period':
        return 'Period';
      case 'name':
        return 'Name';
      case 'groupBlock':
        return 'Group Block';
      case 'electronicConfiguration':
        return 'EC';
      case 'ionizationEnergy':
        return 'Ionization Energy';
      case 'ionRadius':
        return 'Ion Radius';
      case 'standardState':
        return 'Standard State';
      case 'meltingPoint':
        return 'Melting Point';
      default: 
        return false;
    }
  }, []);

  // table
  const rows = useCallback((items: any[]) => {
    const rows = [];

    for (let i = 0; i < items.length; i += 2) {
      const oneColumn = items[i];
      const twoColumn = items[i+1];

      rows.push(<li className="row" key={i}>
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
          items.push({ label, text, key: index });
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