export interface IEConfigItem {
  active: boolean;
  item: {
    level: number;
    name: string;
    pos: {
      x: number;
      y: number;
    }
  }
}