import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;

    label{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        margin: 10px 0;
    }

    input[type=file]{
        display: none
    }

    input, textarea{
        background-color: transparent;
        border: 1px solid ${props => props.theme.border};
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        color: ${props => props.theme.color};
    }


    textarea{
        resize: vertical;
    }
`

export const ImageDisplay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 420px;
    background-color: ${props => props.theme.cardBackground + '90'};
    border: 1px solid ${props => props.theme.border};
    border-radius: 5px;
    margin-bottom: 15px;

    :hover{
        background-color: ${props => props.theme.cardBackground};

        .blank-img{
            transform: scale(1.05);
        }
    }

    label{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        cursor: pointer;
    }

    .portfolio-img{
        object-fit: cover;
        object-position: top;
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .blank-img{
        width: 50%;
        height: 50%;
    }
`