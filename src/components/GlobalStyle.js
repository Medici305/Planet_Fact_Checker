import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-size: 0.875rem;
        line-height: 1.563rem;
        background: #070625;
                font-family: 'Spartan';
    }

    h1 {
        text-transform: uppercase;
        font-size: 5rem;
    }

    h2 {
        font-size: 2.5rem;
        line-height: 3.25rem;
        letter-spacing: -1.5;
    }

    h3 {
        font-size: .75rem;
        line-height: .75rem;
        letter-spacing: 2.6;
    }

    h4 {
        font-size: .688rem;
        line-height: .75rem;
        letter-spacing: 1;
    }
    p {
        font-size: 1.1rem;
        line-height: 2.5rem;
        margin: 2rem 0;
    }

    span {
        font-size: 1.2rem;
    }
    
    button {
        display: block;
        border: 1px solid #38384f;
        padding: 1.2rem 2rem;
        margin-top: 1rem;
        background: none;
        width: 100%;
        text-transform: uppercase;
        text-align: left;
        font-size: 1rem;
        font-weight: 800;
        letter-spacing: .2rem;
        &:hover {
            background: #38384f;
        }
    }

    li {
        list-style: none;
    }

    a {
        font-size: 1.2rem;
        color: #fff;
    }

    hr {
        color: red;
        background-color:red;
    }
`;
export default GlobalStyle;
