import styled from "styled-components";

export const Form = styled.form`
    flex: 2;

    label{
        display: flex;
        flex-direction: column;
        margin: 20px auto;
        width: 90%;
    }

    input{
        background-color: transparent;
        border: 1px solid ${props => props.theme.primaryColor};
        font-size: 16px;
        padding: 10px;
        border-radius: 10px;
        outline: none;
        color: ${props => props.theme.color};
    }
`

export const StackDisplay = styled.div`
    flex: 1;

    img{
        max-width: 95%;
        max-height: 95%;
        min-width: 20%;
        min-height: 20%;
    }
`