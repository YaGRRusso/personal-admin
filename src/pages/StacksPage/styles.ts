import styled from "styled-components";

export const Form = styled.form`
    flex: 2;

    label{
        display: flex;
        flex-direction: column;
        margin: 10px auto;
        width: 90%;
    }

    input{
        background-color: transparent;
        border: 1px solid white;
        font-size: 16px;
        padding: 10px;
        border-radius: 10px;
        outline: none;
        width: 100%;
        color: ${props => props.theme.color};
    }

    input[type=file]{
        cursor: pointer;
        font-size: 1rem;

        ::-webkit-file-upload-button{
            display: none;
        }
    }
`

export const StackDisplay = styled.div`
    flex: 1;

    img{
        height: 280px;
        min-width: 80px;
        filter: brightness(0) invert(1);
    }
`