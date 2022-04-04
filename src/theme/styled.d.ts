import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        primaryColor: string,
        color: string,
        backgroundColor: string
    }
}