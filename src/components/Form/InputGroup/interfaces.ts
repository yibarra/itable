import { ReactNode } from "react";
import { ITheme } from "../../../providers/ThemeProvider/interfaces";

export interface IInputGroup {
  children: ReactNode;
  text: string;
  theme: ITheme;
}