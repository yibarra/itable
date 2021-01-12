import styled from "styled-components";

export const EConfigDiv = styled.div`
  float: left;
  padding: 0;
  position: relative;
  width: 100%;

  .ec--title {
    float: left;
    margin: 0 0 30px;
    width: 100%;

    .label,
    .text {
      color: ${({ theme }: any) => theme.background_color};
      float: left;
      font-weight: 600;
      letter-spacing: -0.02em;
      position: relative;
      text-transform: uppercase;
      width: 100%;
    }

    .label {
      font-size: 12px;
      margin: 0 0 5px;
    }
    
    .text {
      font-size: 16px;
      font-weight: 600;
      text-indent: -3px;
    }
  }
`;