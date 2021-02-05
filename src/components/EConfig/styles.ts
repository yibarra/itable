import styled from "styled-components";

export const EConfigDiv = styled.div`
  float: left;
  padding: 0;
  position: relative;
  width: 100%;

  .ec--item {
    float: left;
    width: 50%;

    &:last-child {
      padding-left: 20px;
      padding-bottom: 60px;
    }
  }

  .ec--title {
    float: left;
    margin: 0 0 30px;
    width: 100%;

    label,
    .label,
    .text {
      color: ${({ theme }: any) => theme.background_color};
      float: left;
      font-weight: 600;
      letter-spacing: -0.04em;
      position: relative;
      text-transform: uppercase;
      width: 100%;
    }

    label,
    .label {
      font-size: 12px;
      margin: 0 0 5px;
    }

    label {
      font-weight: 400;
      text-transform: initial;
    }
    
    .text {
      font-size: 16px;
      font-weight: 600;
      text-indent: -3px;
    }
  }

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px) {
    .ec--item {
      width: 100%;
    }
  }
`;