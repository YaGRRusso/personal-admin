import styled from "styled-components";

let menuWidth = '120px';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    `

export const Menu = styled.aside<{ active: boolean }>`
    left: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    width: ${menuWidth};
    background-color: ${props => props.theme.menuBackground};
    transition: all .3s;
    transform: ${props => props.active ? 'translateX(0)' : 'translateX(-120px)'};

    h1{
        margin-top: -38px;
        text-align: center;
        font-size: 1rem;
        line-height: 1;
    }

    nav, ul{
        height: 100%;
    }
    nav{
        padding: 10px 0;
        overflow: hidden auto;
    }
    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    @media (max-width: 768px){
        transform: ${props => props.active ? 'translateX(-120px)' : 'translateX(0)'};
    }
`

export const MenuTogle = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 15px;
    right: -48px;
    width: 48px;
    height: 42px;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${props => props.theme.backgroundColor};

    div {
        width: 32px;
        height: 4px;
        background-color: ${props => props.theme.primaryColor};
        border-radius: 10px;
        margin-right: 5px;

        ::before, ::after{
            content: '';
            position: absolute;
            width: 32px;
            height: 4px;
            background-color: ${props => props.theme.primaryColor};
            border-radius: 10px;
        }
        ::before{
            transform: translateY(10px);
        }
        ::after{
            transform: translateY(-10px);
        }
    }
`

export const Pages = styled.div<{ active: boolean }>`
    margin-left: ${props => props.active ? menuWidth : '0'};
    flex: 1;
    transition: all .3s;
    padding: 15px 10px;

    @media (max-width: 768px){
        margin-left: 0;
    }
`
