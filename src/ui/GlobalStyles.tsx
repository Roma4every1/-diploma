import { createGlobalStyle } from "styled-components";
import { Color } from "./index";
import { Reset } from "./reset";
import { ThemeColors } from "./theme";

export const GlobalStyle = createGlobalStyle`

${Reset}

${ThemeColors}

body {
    background-color: ${Color.ThemeBlack};
    color: ${Color.ThemeWhite};
    font-family: "Exo 2", Arial, Helvetica, sans-serif;
    transition: background-color 0.5s;
}

`;
