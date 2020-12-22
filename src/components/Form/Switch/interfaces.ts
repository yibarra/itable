import { ITheme } from "../../../providers/ThemeProvider/interfaces";

export interface ISwitch {
  border: number;
  size: number;
  setValue: (value: number) => void;
  styles: ITheme;
  value: number;
}