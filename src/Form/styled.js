import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;