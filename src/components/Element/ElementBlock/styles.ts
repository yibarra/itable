import styled from "styled-components";

// element block div
export const ElementBlockDiv = styled.div`
  float: left;
  height: 270px;
  margin: 0 0 40px;
  padding: 0;
  position: relative;
  transform: translate(-13px, 0);
  width: 100%;

  .symbol {
    animation: scale-in-center 0.5s 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    background-color: ${({ theme }: any) => theme.second_color};
    font-weight: 600;
    font-size: 90px;
    height: 270px;
    line-height: 270px;
    letter-spacing: -0.04em;
    left: 50%;
    position: absolute;
    top: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    width: 220px;

    &:before {
      background: transparent;
      border: 2px solid ${({ theme }: any) => theme.second_color};
      content: '';
      left: 50%;
      height: calc(100% + 4px);
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% + 4px);
    }
  }
`;