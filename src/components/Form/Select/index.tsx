import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import SelectContent from './SelectContent';
import SelectTitle from './SelectTitle';

import UseClickOutSide from '../../../uses/UseClickOutSide';

import { ISelect } from './interfaces';

import { SelectDiv } from './styles';

// select
const Select: FC<ISelect> = ({ items, optionDefault, callback }) => {
  // element
  const element: any = useRef<any>(null);

  // value
  const [ value, setValue ] = useState<any>(null);
  const [ open, setOpen ] = useState<boolean>(false);

  // const
  const onChange = useCallback((value: any) => {
    callback(value);
    setValue(value);
    setOpen(false);
  }, [ callback ]);

  // click out
  UseClickOutSide(element, () => setOpen(false));

  // use state
  useEffect(() => {
    if (optionDefault instanceof Object) {
      setValue(value);
    }
  }, [ optionDefault, value ]);

  // render
  return (
    <SelectDiv
      ref={element}>
      <SelectTitle
        open={open}
        setOpen={setOpen}
        value={value || optionDefault} />

      <SelectContent
        open={open}
        items={items}
        onChange={onChange}
        value={value} />
    </SelectDiv>
  );
};

export default Select;