import React, { FC } from 'react';

import { ISelectOption } from './interfaces';

import { SelectOptionButton } from './styles';

// select option
const SelectOption: FC<ISelectOption> = ({ active, onChange, item }) => {
  const { name } = item;

  // render
  return (
    <SelectOptionButton
      data-active={active}
      onClick={() => onChange(item)}>
      <span className="name">{name}</span>
    </SelectOptionButton>
  );
};

export default SelectOption;