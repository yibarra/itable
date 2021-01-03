export interface IRadioButton {
  active: boolean;
  name: string;
  text: string;
  onChange(name: string, value: string): void;
}