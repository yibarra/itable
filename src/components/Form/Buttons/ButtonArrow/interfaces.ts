import { ITheme } from "../../../../providers/ThemeProvider/interfaces";

export interface IButtonArrow {
  open: boolean;
  setOpen(value: boolean): void;
  theme: ITheme;
}