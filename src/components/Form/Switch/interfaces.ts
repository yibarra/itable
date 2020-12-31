import { ITheme } from "../../../providers/ThemeProvider/interfaces";

export interface ISwitch {
  border?: number;
  size: number;
  setValue(value: any): any;
  value: boolean;
}