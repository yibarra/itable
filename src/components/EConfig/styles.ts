import styled from "styled-components";

export const EConfigDiv = styled.div`
  float: left;
  padding: 0 0 60px;
  position: relative;
  width: 100%;

  .ec--title {
    float: left;
    margin: 0 0 30px;
    width: 100%;

    .label,
    .text {
      float: left;
      letter-spacing: -0.02em;
      position: relative;
      width: 100%;
    }

    .label {
      font-size: 12px;
      margin: 0 0 5px;
    }
    
    .text {
      font-size: 16px;
      text-indent: -3px;
    }
  }
`;