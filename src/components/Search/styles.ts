import styled from 'styled-components';

export const SearchDiv = styled.div`
  float: left;
  margin: 0 0 20px;
  padding: 0;
  position: relative;
  text-align: right;
  width: auto;

  button {
    padding: 0;
    width: 20px;

    &.btn {
      .material-icons {
        color: ${({ theme }) => theme.text_color};
      }
    }
  }

  &[data-active="true"] {
    text-align: left;
    width: 200px;

    p {
      margin-right: 40px;
    }
  }

  &[data-switch="true"] {
    button {
      &.btn {
        .material-icons {
          color: ${({ theme }) => theme.background_color};
        }
      }
    }

    p {
      color: ${({ theme }) => theme.background_color};
    }
  }
`;