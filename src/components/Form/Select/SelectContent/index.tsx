import React, { FC } from 'react';
import { useSpring } from 'react-spring';

import SelectOption from '../SelectOption';

import { ISelectContent } from './interfaces';

import { SelectContentDiv } from './styles';

// select content
const SelectContent: FC<ISelectContent> = ({ items, onChange, open, value }) => {
  const props = useSpring({ height: open ? 'auto' : 0 });

  // render
  return (
    <SelectContentDiv
      style={{
        ...props 
      }}>
      {items && items.map((item: any, index: number) =>
        <SelectOption
          active={item === value}
          item={item}
          onChange={onChange}
          key={index} />)}
    </SelectContentDiv>
  );
};

export default SelectContent;