import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.accentColor};

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    overflow-wrap: anywhere;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    padding: 0;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.textColor};
    border: none;
    cursor: pointer;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.colors.green};

        &:hover {
            background-color: ${({ theme }) => theme.colors.greenHover};
        }

        &:active {
            background-color: ${({ theme }) => theme.colors.greenActive};
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.colors.red};

        &:hover {
            background-color: ${({ theme }) => theme.colors.redHover};
        }

        &:active {
            background-color: ${({ theme }) => theme.colors.redActive};
        }
    `}
`;