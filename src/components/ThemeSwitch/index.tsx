import React, { FC, useCallback, useContext, useState } from 'react';
import styled from 'styled-components';

import InputGroup from '../Form/InputGroup';

import { ThemeContext } from '../../providers/ThemeProvider';

import Switch from '../Form/Switch';

// theme switch div
const ThemeSwitchDiv = styled.div`

`;

// theme switch
const ThemeSwitch: FC<any> = ({ onToggle }) => {
  const { name } = useContext(ThemeContext);
  const [ value, setValue ] = useState<boolean>(true);

  // on change
  const onChange = useCallback((value: boolean) => {
    setValue(value);
    onToggle();
  }, [ onToggle ]);

  // render
  return (
    <ThemeSwitchDiv>
      <InputGroup
        text={name}>
        <Switch
          border={3}
          size={20}
          setValue={(value: boolean) => onChange(value)}
          value={value} />
      </InputGroup>
    </ThemeSwitchDiv>
  );
};

export default ThemeSwitch;