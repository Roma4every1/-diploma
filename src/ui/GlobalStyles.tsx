import { createGlobalStyle } from "styled-components";
import { Color } from "./index";
import { Reset } from "./reset";

export const GlobalStyle = createGlobalStyle`

${Reset}

body {
    background-color: black;
    color: white;
    font-family: "Exo 2", Arial, Helvetica, sans-serif;
    transition: background-color 0.5s;
}

`;
