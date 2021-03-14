import styled from 'styled-components';

export const SearchInputDiv = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  flex-flow: row wrap;
  float: none;
  margin: 0;
  right: calc(100% + 5px);
  position: absolute;
  width: auto;

  .btn-icon {
    left: -30px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    .material-icons {
      color: ${({ theme }) => theme.text_color};
    }
  }

  &[data-switch="true"] {
    .btn-icon {
      .material-icons {
        color: ${({ theme }) => theme.background_color};
      }
    }

    input {
      border-bottom-color: ${({ theme }) => theme.background_color};
      color: ${({ theme }) => theme.background_color};
      letter-spacing: 0.04em;
    }
  }
`;

export const SearchTermI = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.text_color};
  color: ${({ theme }) => theme.text_color};
  font-size: 14px;
  margin: 0;
  outline: none;
  letter-spacing: -0.04em;
  padding: 0 0 5px;
  text-align: left;
  text-transform: capitalize;
  width: 2px;
  white-space: nowrap;
`;