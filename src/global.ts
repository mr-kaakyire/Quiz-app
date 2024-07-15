// src/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Rubik';
  src: url('./assets/fonts/Rubik-VariableFont_wght.ttf') format('truetype');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Rubik';
  src: url('./assets/fonts/Rubik-Italic-VariableFont_wght.ttf') format('truetype');
  font-weight:300;
  font-style: italic;
}




html,body {
  position: relative;
  font-family: 'Rubik', sans-serif;
  /* color: #2b3041; */
  background-color: #f5f6fa;
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  background: ${({ theme }) => theme.body};
 color: ${({ theme }) => theme.text};
 transition: background-color 500ms ease-in;

}
`;