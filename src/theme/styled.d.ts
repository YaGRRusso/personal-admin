import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: string,
        backgroundColor: string,
        primaryColor: string,
        menuBackground: string,
        cardBackground: string,
        border: string
    }
}