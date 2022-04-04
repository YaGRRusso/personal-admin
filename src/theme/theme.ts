import { createGlobalStyle, DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
    color: '#f2f2f2',
    primaryColor: '#1EA54C',
    backgroundColor: '#24323F',
    menuBackground: '#2E3E4A',
    cardBackground: '#1D2733'
}

export const GlobalStyles = createGlobalStyle`
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