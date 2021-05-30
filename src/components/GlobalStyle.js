import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Spartan';
        font-size: 0.875rem;
        line-height: 1.563rem;
        background: #070625;
    }

    h1 {
        font-family: 'Antonio';
        font-size: 5rem;
        line-height: 6.438rem;
    }

    h2 {
        font-family: 'Spartan';
        font-size: 2.5rem;
        line-height: 3.25rem;
        letter-spacing: -1.5;
    }

    h3 {
        font-family: 'Spartan';
        font-size: .75rem;
        line-height: .75rem;
        letter-spacing: 2.6;
    }

    h4 {
        font-family: 'Spartan';
        font-size: .688rem;
        line-height: .75rem;
        letter-spacing: 1;
    }

    li {
        list-style: none;
    }

    a {
        font-family: 'Spartan';
        font-size: 1.2rem;
        color: #fff;
    }

    hr {
        color: red;
        background-color:red;
    }
`;
export default GlobalStyle;
