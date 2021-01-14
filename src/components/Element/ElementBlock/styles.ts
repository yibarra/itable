import styled from "styled-components";

// element block div
export const ElementBlockDiv = styled.div`
  float: left;
  height: 270px;
  padding: 40px 0;
  position: relative;
  width: 100%;

  .symbol {
    background-color: ${({ theme }: any) => theme.background_color};
    font-weight: 600;
    font-size: 90px;
    height: 270px;
    line-height: 270px;
    left: 50%;
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    width: 220px;

    &:before {
      background: transparent;
      border: 2px solid ${({ theme }: any) => theme.background_color};
      content: '';
      left: 50%;
      height: calc(100% + 2px);
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% + 2px);
    }
  }
`;