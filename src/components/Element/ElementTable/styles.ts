import styled from "styled-components";

export const ElementTableContainer = styled.ul`
  float: left;
  margin: 20px 0 0;
  padding: 20px 0;
  position: relative;
  width: 100%;
  vertical-align: top;

  .row {
    animation: swing-in-top-fwd 0.6s 0.7s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
    align-items: center;
    display: inline-flex;
    flex-flow: row wrap;
    float: left;
    justify-content: center;
    margin: 0 0 1px;
    position: relative;
    width: 100%;

    &:nth-child(odd) {
      .label,
      .text {
        color: inherit;
      }

      &:after {
        background-color: ${({ theme }: any) => theme.second_color};
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

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px) {
    .row {
      width: 100%;

      p {
        .label,
        .text {
          color: inherit;
        }
      }

      &:nth-child(even),
      &:nth-child(odd) {
        &:after {
          background-color: ${({ theme }: any) => theme.second_color};
          content: '';
          height: 50%;
          position: absolute;
          top: 0;
          transform: translate(0, 0);
          width: 100%;
          z-index: -1;
        }
        
        p {
          &:first-child {
            .label,
            .text {
              color: inherit;
            }
          }

          &:last-child {
            .label,
            .text {
              color: ${({ theme }: any) => theme.second_color};
            }
          }
        }
      }
    }
  }
`;