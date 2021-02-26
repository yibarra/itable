import styled from "styled-components";

export const EConfigDiv = styled.div`
  float: left;
  padding: 30px 0 0;
  position: relative;
  width: 100%;

  .ec--item {
    animation: swing-in-top-fwd 0.6s 1.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
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

      &:first-child {
        margin-top: 30px;
        margin-bottom: 70px;
      }
    }
  }
`;