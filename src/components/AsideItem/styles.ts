import styled from "styled-components";

export const Container = styled.li<{ active: boolean }>`
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    padding: 20px 0;
    background-color: ${props => props.active ? props.theme.backgroundColor : ''};
    padding-right: 6px;
    margin-left: 6px;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    transition: all .3s;
    box-shadow: ${props => props.active ? `0 3px 5px #00000050` : ''};

    :hover{
        transform: ${props => props.active ? '' : 'scale(1.05)'};
    }

    img{
        margin-bottom: 5px;
        height: 24px;
        width: auto;
    }

    span{
        color: ${props => props.active ? props.theme.primaryColor : props.theme.color};
        font-weight: ${props => props.active ? 'bold' : '500'};
        text-transform: uppercase;
        font-size: .9rem;
    }
    `