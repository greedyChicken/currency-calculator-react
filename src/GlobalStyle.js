import { createGlobalStyle } from "styled-components";
import background from "./images/0000.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    #root {
        background-image: url("${background}");
        height: 100vh;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;
