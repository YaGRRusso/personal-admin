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

    nav, ul{
        height: 100%;
    }
    nav{
        padding: 10px 0;
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

export const Pages = styled.div<{ active: boolean }>`
    margin-left: ${props => props.active ? menuWidth : '0'};
    flex: 1;

    @media (max-width: 768px){
        margin-left: 0;
    }
`

export const MenuTogle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 15px;
    right: -55px;
    width: 42px;
    height: 42px;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${props => props.theme.menuBackground};

    div {
        width: 80%;
        height: 5px;
        background-color: ${props => props.theme.primaryColor};
        border-radius: 10px;

        ::before, ::after{
            content: '';
            position: absolute;
            width: 80%;
            height: 5px;
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