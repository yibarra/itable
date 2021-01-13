import React, { FC, useCallback } from 'react';
import ElementBlockItem from './ElementBlockItem';
import { IElementBlock } from './interfaces';
import { ElementBlockDiv } from './styles';

// element block
const ElementBlock: FC<IElementBlock> = ({ element }) => {
  const { cpkHexColor, symbol } = element;

  // get label
  const getLabel = useCallback((label: any) => {
    switch (label) {
      case 'atomicMass':
        return 'Atomic Mass';
      case 'atomicNumber':
        return 'Atomic Number';
      case 'electronegativity':
        return 'Electro-Negativity';
      case 'name':
        return 'Name';
      case 'electronicConfiguration':
        return 'E Config';
      case 'ionizationEnergy':
        return 'Ionization Energy';
      case 'oxidationStates':
        return 'Oxidation States';
      default: 
        return false;
    }
  }, []);

  // properties
  const properties = useCallback(() => {
    const items: any = [];

    if (element instanceof Object) {
      Object.keys(element).forEach((key: string, index: number) => {
        const text = element[key];
        const label = getLabel(key);

        if (label) {
          items.push(<ElementBlockItem
            color={cpkHexColor}
            label={label.toString()}
            value={text}
            key={index} />);
        }
      });
    }

    return items;
  }, [ element, getLabel, cpkHexColor ]);

  // render
  return (
    <ElementBlockDiv>
      {properties()}
      <div className="symbol" style={{ color: cpkHexColor }}>{symbol}</div>
    </ElementBlockDiv>
  );
};

export default ElementBlock;