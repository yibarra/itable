import styled from "styled-components";

export const ThemeSwitchContainer = styled.div`
  display: inline-flex;
  flex-row: column wrap;
  float: left;
  text-align: left;
  width: 100%;

  label {
    text-transform: capitalize;
  }

  &[data-switch="true"] {
    label {
      color: ${({ theme }: any) => theme.background_color};
    }
  }
`;