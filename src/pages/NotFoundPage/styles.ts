import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 120vh;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    font-size: 1.5rem;

    img {
        width: 320px;
        height: 320px;
    }
`