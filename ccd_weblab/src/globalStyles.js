import { createGlobalStyle } from "styled-components";

// Definicion de estilos globalles
// la definicion de los estilod de google fonts se encuentra en package.json

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat',sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }
`
export default GlobalStyle;