import React, { FC } from 'react';
import styled from 'styled-components';

import InputGroup from '../Form/InputGroup';

import Switch from '../Form/Switch';

// theme switch div
const ThemeSwitchDiv = styled.div`

`;

// theme switch
const ThemeSwitch: FC<any> = ({ index, styles, setTheme }) => {
  // render
  return (
    <ThemeSwitchDiv>
      <InputGroup
        styles={styles}
        text={styles?.name}>
        <Switch
          border={3}
          size={20}
          styles={styles}
          setValue={(value: number) => setTheme(value)}
          value={index} />
      </InputGroup>
    </ThemeSwitchDiv>
  );
};

export default ThemeSwitch;