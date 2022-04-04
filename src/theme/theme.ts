import { createGlobalStyle, DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
    primaryColor: '#219ebc',
    color: '#121212',
    backgroundColor: '#f2f2f2'
}

export const darkTheme: DefaultTheme = {
    primaryColor: '#219ebc',
    color: '#f2f2f2',
    backgroundColor: '#121212'
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