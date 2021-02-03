export interface IEConfigLevel {
  level: number;
  name: string;
  value: number;
  pos: {
    x: number;
    y: number;
  };
}

export interface IEConfigItem {
  active: boolean;
  color: string;
  diff: number;
  last: boolean;
  item: IEConfigLevel;
}