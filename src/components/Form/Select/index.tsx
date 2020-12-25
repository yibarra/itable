import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import SelectContent from './SelectContent';
import SelectTitle from './SelectTitle';

// select div
const SelectDiv = styled.div`
  margin: 17px 0 0;
  position: relative;
  width: 250px;
`;

// select
const Select: FC<any> = ({ items, optionDefault, theme }) => {
  // value
  const [ value, setValue ] = useState<any>();
  const [ open, setOpen ] = useState<boolean>(false);

  // use state
  useEffect(() => {
    if (optionDefault instanceof Object) {
      setValue(value);
    }
  }, [ optionDefault, value ]);

  // render
  return (
    <SelectDiv style={{
      backgroundColor: theme.text_color
    }}>
      <SelectTitle
        open={open}
        setOpen={setOpen}
        theme={theme}
        value={value || optionDefault} />

      <SelectContent
        open={open}
        items={items}
        onChange={setValue}
        theme={theme} />
    </SelectDiv>
  );
};

export default Select;