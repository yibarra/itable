import styled from "styled-components";

export const ThemeSwitchContainer = styled.div`
  display: inline-flex;
  flex-flow: column wrap;
  float: left;
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