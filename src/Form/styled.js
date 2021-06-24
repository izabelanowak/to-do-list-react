import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.textColor};
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hoverColor};
        transform: scale(1.1);
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.activeColor};
    }
`;