import React, { FC, useCallback, useState } from 'react';

import Switch from '../Form/Switch';

import { IThemeSwitch } from './interfaces';

import { ThemeSwitchContainer } from './styles';

// theme switch
const ThemeSwitch: FC<IThemeSwitch> = ({ color, onToggle }) => {
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
        <Switch
          border={3}
          color={color}
          size={20}
          setValue={(value: boolean) => onChange(value)}
          value={value} />
    </ThemeSwitchContainer>
  );
};

export default ThemeSwitch;