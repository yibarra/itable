import React, { FC, useCallback, useContext, useState } from 'react';

import InputGroup from '../Form/InputGroup';
import Switch from '../Form/Switch';

import { ThemeContext } from '../../providers/ThemeProvider';

import { IThemeSwitch } from './interfaces';

import { ThemeSwitchContainer } from './styles';

// theme switch
const ThemeSwitch: FC<IThemeSwitch> = ({ color, onToggle }) => {
  const { theme } = useContext(ThemeContext);
  const [ value, setValue ] = useState<boolean>(true);

  // on change
  const onChange = useCallback((value: boolean) => {
    setValue(value);
    onToggle();
  }, [ onToggle ]);

  // render
  return (
    <ThemeSwitchContainer
      data-switch={color ? true : false}>
      <InputGroup
        text={theme.name}>
        <Switch
          border={3}
          color={color}
          size={20}
          setValue={(value: boolean) => onChange(value)}
          value={value} />
      </InputGroup>
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;