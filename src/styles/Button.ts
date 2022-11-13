import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--unic-color);
  border-radius: 4px;

  background-color: transparent;
  text-transform: uppercase;

  padding: 12px;
  width: 326px;
  max-width: 326px;

  & + button {
    margin-top: 16px;
  }
`;
