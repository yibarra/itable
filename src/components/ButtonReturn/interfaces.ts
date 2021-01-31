export interface IButtonReturn {
  active: boolean;
  callback(value: any): any;
  text: string;
}