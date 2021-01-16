export interface IRangeSlider {
  min: number;
  max: number;
  label: string;
  size: number;
  callback(value: any): any;
}