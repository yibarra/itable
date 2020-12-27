import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import InputGroup from '../Form/InputGroup';

import { ThemeContext } from '../../providers/ThemeProvider';

import Switch from '../Form/Switch';

// theme switch div
const ThemeSwitchDiv = styled.div`

`;

// theme switch
const ThemeSwitch: FC<any> = () => {
  const themeContext = useContext(ThemeContext);
  const { theme, themes, setTheme }: any = themeContext;

  const [ value, setValue ] = useState<number>(0);

  // on change
  const onChange = useCallback((value: number) =>
    setTheme(themes[value]), [ themes, setTheme ]);

  // use effect
  useEffect(() => {
    if (theme instanceof Object && Array.isArray(themes)) {
      setValue(themes.indexOf(theme));
    }
  }, [ theme, themes ]);

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
          setValue={(value: number) => onChange(value)}
          value={value} />
      </InputGroup>
    </ThemeSwitchDiv>
  );
};

export default ThemeSwitch;