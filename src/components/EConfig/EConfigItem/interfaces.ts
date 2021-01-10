export interface IEConfigItem {
  active: boolean;
  diff: number;
  last: boolean;
  item: {
    level: number;
    name: string;
    value: number;
    pos: {
      x: number;
      y: number;
    }
  }
}