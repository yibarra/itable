import { ReactNode } from "react";
export interface IRowColumnInfo {
  position: string;
  xy: number[];
}
export interface IRowColumn {
  children: ReactNode;
  info: IRowColumnInfo;
  xpos: number;
  ypos: number;
}