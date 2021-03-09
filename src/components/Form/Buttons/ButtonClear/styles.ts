import styled from 'styled-components';

export const ButtonClearButton = styled.button`
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: none;

  .material-icons {
    color: ${({ theme }) => theme.text_color};
    font-size: 22px;
  }
`;