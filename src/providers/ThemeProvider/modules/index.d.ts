import 'styled-componets';

declare module 'styled-components' {
  export interface DefaultTheme {
    background_color: string;
    name: string;
    second_color: string;
    text_color: string;
  }
}