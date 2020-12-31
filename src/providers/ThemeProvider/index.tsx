import React, { createContext, FC, useCallback } from 'react';
import { ThemeProvider as ThemeProviderStyled, DefaultTheme } from 'styled-components';
import useLocalStorage from '@rehooks/local-storage';

import GlobalStyle from './styles/global';
import { Dark } from './themes/Dark';
import { Light } from './themes/Light';

import { IThemeProvider, IThemeContext } from './interfaces';

// theme context
const ThemeContext: any = createContext({} as IThemeContext);

// theme provider
const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  // theme
  const [ theme, setTheme ] = useLocalStorage<DefaultTheme>('theme', Dark);

  // on change
  const onToggle = useCallback(() => 
    setTheme(theme.name === 'dark' ? Light : Dark), [ setTheme, theme ]);

  // render
  return (
    <ThemeContext.Provider value={{
      theme,
      onToggle,
    }}>
      <ThemeProviderStyled theme={theme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
export default ThemeProvider;