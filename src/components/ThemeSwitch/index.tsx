import React, { FC } from 'react';
import styled from 'styled-components';

import InputGroup from '../Form/InputGroup';

import Switch from '../Form/Switch';

// theme switch div
const ThemeSwitchDiv = styled.div`

`;

// theme switch
const ThemeSwitch: FC<any> = ({ index, theme, setTheme }) => {
  // render
  return (
    <ThemeSwitchDiv>
      <InputGroup
        theme={theme}
        text={theme?.name}>
        <Switch
          border={3}
          size={20}
          theme={theme}
          setValue={(value: number) => setTheme(value)}
          value={index} />
      </InputGroup>
    </ThemeSwitchDiv>
  );
};

export default ThemeSwitch;