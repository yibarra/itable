import styled from "styled-components";

export const ElementTableContainer = styled.ul`
  float: left;
  margin: 20px 0 0;
  padding: 20px 0;
  position: relative;
  width: 100%;
  vertical-align: top;

  .row {
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

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px) {
    .row {
      width: 100%;

      &:after {
        display: none;
      }

      &:nth-child(odd) {
        p {
          &:first-child {
            background-color: ${({ theme }: any) => theme.background_color};
            
            .label,
            .text {
              color: inherit;
            }
          }

        }

        .label,
        .text {
          color: ${({ theme }: any) => theme.background_color};
        }
      }

      &:nth-child(even) {
        p {
          &:first-child {
            background-color: ${({ theme }: any) => theme.background_color};
            
            .label,
            .text {
              color: inherit;
            }
          }

        }

        .label,
        .text {
          color: ${({ theme }: any) => theme.background_color};
        }
      }
    }
  }
`;