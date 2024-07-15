// src/theme/theme.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    slider:string;
    toggleBorder: string;
    background: string;
    backgroundSecondary:string;
  }
}
