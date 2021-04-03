import styled from "styled-components";

export const ThemeSwitchContainer = styled.div`
  display: inline-flex;
  flex-flow: column wrap;
  margin: 0;
  float: right;
  text-align: left;
  width: auto;

  > div {
    align-items: flex-end;
    right: 5px;
  }

  &[data-switch="true"] {
    label {
      color: ${({ theme }: any) => theme.background_color};
    }
  }
`;