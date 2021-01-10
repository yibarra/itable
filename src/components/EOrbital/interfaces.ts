import { IEConfigLevel } from "../EConfig/EConfigItem/interfaces";

export interface IEOrbital {
  any?: any;
  atomicNumber: number;
  level: IEConfigLevel;
  index: number;
  difference: number;
}