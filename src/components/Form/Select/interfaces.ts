export interface ISelect {
  items: any[];
  callback(value: any): void;
  optionDefault: any;
}