import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export interface ITheme {
  background_color: string;
  name: string;
  text_color: string;  
}

export interface IThemeContext {
  theme: DefaultTheme;
  onToggle(): void;
}

export interface IThemeProvider {
  children: ReactNode;
}
