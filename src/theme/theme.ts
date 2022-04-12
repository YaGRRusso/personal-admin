import { createGlobalStyle, DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
    color: '#f2f2f2',
    primaryColor: '#1EA54C',
    backgroundColor: '#24323F',
    menuBackground: '#2E3E4A',
    cardBackground: '#1D2733',
    border: '#f2f2f290'
}

export const GlobalStyles = createGlobalStyle`
    ::-webkit-scrollbar{
        width: 3px;
    }
    ::-webkit-scrollbar-track {
        background: #f2f2f210;
    }
    ::-webkit-scrollbar-thumb {
        background: #f2f2f250;
        border-radius: 10px;
    }

    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 95%;
        margin: auto;
        padding: 60px 0;
    }
    .pageTitle{
        font-size: 2rem;
        margin-bottom: 60px;
    }

    body{
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.backgroundColor};
    }

    @media (max-width: 425px) {
        html {
            font-size: 12px;
        }
    }
`