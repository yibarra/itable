import styled from "styled-components";

export const ElementBlockItemDiv = styled.div`
  position: absolute;
  z-index: 2;

  .arrow,
  .label,
  .value {
    font-size: 14px;
    float: left;
    letter-spacing: -0.04em;
    line-height: 1em;
    position: relative;
  }

  .arrow {
    border-radius: 100%;
    height: 8px;
    left: calc(100% + 5px);
    position: absolute;
    top: calc(50% + 1px);
    transform: translate(0, -50%);
    width: 8px;

    &:after {
      background-color: inherit;
      content: '';
      height: 1px;
      right: 100%;
      line-height: 1em;
      padding: 0;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 5px;
    }
  }

  .label {
    color: ${({ theme }: any) => theme.background_color};
    font-size: 12px;
    padding: 0 10px;
    white-space: nowrap;

    .bg-i {
      left: 0;
      position: absolute;
    }
  }
  
  .value {
    font-weight: 300;
    overflow: hidden;
    letter-spacing: -0.04em;
    padding: 0;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &[data-type="atomic-number"],
  &[data-type="atomic-mass"] {
    top: 10px;
  }

  &[data-type="atomic-number"],
  &[data-type="electro-negativity"],
  &[data-type="oxidation-states"] {
    animation: fade-in-left 0.6s 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    
    .label {
      .arrow {
        left: initial;
        right: calc(100% + 5px);

        &:after {
          left: 100%;
          right: initial;
        }
      }
    }
  }

  &[data-type="e-config"],
  &[data-type="name"],
  &[data-type="ionization-energy"],
  &[data-type="atomic-mass"] {
    animation: fade-in-right 0.6s 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    left: initial;
    right: calc(50% + 110px);

    .value {
      left: 100%;
      padding-left: 20px;
    }
  }

  &[data-type="electro-negativity"],
  &[data-type="atomic-number"] {
    left: calc(50% + 110px);

    .label {
      padding: 0 10px;
    }

    .value {
      left: initial;
      padding: 0 20px 0 0;
      right: 100%;
    }
  }

  &[data-type="oxidation-states"] {
    bottom: 10px;
    left: calc(50% + (110px - 30px));
    text-align: right;
    z-index: 2;

    .label {
      left: 20px;
      padding: 0 0 0 20px;
      position: absolute;
      top: 0;

      .arrow {
        &:after {
          width: 15px;
        }
      }
    }

    .value {
      bottom: 0;
      font-size: 12px;
      left: 0;
      line-height: 1.4em;
      padding: 15px 0 0;
      position: relative;

      .state {
        display: block;
        position: relative;
        width: 100%;
      }
    }
  }

  &[data-type="ionization-energy"],
  &[data-type="electro-negativity"] {
    top: 50px;
  }

  &[data-type="name"] {
    top: 190px;

    .value {
      padding: 0 20px 5px;
      text-align: center;
      width: 220px;
      white-space: nowrap;
    }
  }

  &[data-type="e-config"] {
    top: 245px;

    .value {
      width: 180px;
    }
  }
`;