import styled from "styled-components";

export const ThemeSwitchContainer = styled.div`
  display: inline-flex;
  flex-flow: column wrap;
  margin: 5px 0 0;
  float: right;
  text-align: left;
  width: auto;

  label {
    text-transform: capitalize;
  }

  > div {
    align-items: flex-end;
    width: 60px;
  }

  &[data-switch="true"] {
    label {
      color: ${({ theme }: any) => theme.background_color};
    }
  }
`;