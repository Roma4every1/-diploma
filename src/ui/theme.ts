import { css } from "styled-components";

export type Theme = "dark" | "light";

export const ThemeColors = css`
  html[data-theme="dark"] {
    --primary: #7b61ff;
    --primary-light: #917cff;
    --secondary: #80858b;
    --theme-black: #000000;
    --theme-white: #ffffff;
    --black: #000000;
    --white: #ffffff;
    --light: #afb2b6;
    --dark: #101014;
    --graphite: #323537;
    --error: #ff5154;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
  }

  html[data-theme="light"] {
    --primary: #7b61ff;
    --primary-light: #917cff;
    --secondary: #80858b;
    --theme-black: #ffffff;
    --theme-white: #000000;
    --black: #000000;
    --white: #ffffff;
    --light: #afb2b6;
    --dark: #242426;
    --graphite: #afb2b6;
    --error: #ff5154;
    --green: #00a340;
    --yellow: #f3a608;
    --orange: #f45d2d;
  }
`;
