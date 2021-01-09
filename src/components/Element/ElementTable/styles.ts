import styled from "styled-components";

export const ElementTableContainer = styled.ul`
  float: left;
  margin: 20px 0 0;
  padding: 20px 0;
  position: relative;
  width: 100%;
  vertical-align: top;

  .row {
    float: left;
    margin: 0 0 1px;
    position: relative;
    width: 100%;

    &:nth-child(odd) {
      &:after {
        background-color: ${({ theme }: any) => theme.background_color};
        border-radius: 0;
        content: '';
        height: 100%;
        left: 0px;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        width: 100%;
        z-index: -1;
      }
    }
  }
`;