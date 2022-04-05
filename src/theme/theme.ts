import { createGlobalStyle, DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
    color: '#f2f2f2',
    primaryColor: '#1EA54C',
    backgroundColor: '#24323F',
    menuBackground: '#2E3E4A',
    cardBackground: '#1D2733'
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
        padding: 20px 0;
    }
    .pageTitle{
        font-size: 2rem;
        margin-bottom: 30px;
    }
    .flexLine{
        display: flex;
        align-items: stretch;
        justify-content: center;
        width: 100%;
        margin: 0 auto;
    }
    .cardItem{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: ${props => props.theme.cardBackground};
        border-radius: 10px;
        padding: 15px;
        margin: 10px;
        box-shadow: 1px 3px 5px #00000060;
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