import styled from "styled-components";

export const ElementBlockItemDiv = styled.div`
  position: absolute;
  z-index: 2;

  .label,
  .value {
    font-size: 14px;
    float: left;
    letter-spacing: -0.02em;
    line-height: 1em;
    position: relative;
  }

  .label {
    color: ${({ theme }: any) => theme.background_color};
    font-size: 12px;
    padding: 0 10px;
    white-space: nowrap;
  }
  
  .value {
    overflow: hidden;
    padding: 0;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &[data-type="atomic-number"],
  &[data-type="atomic-mass"] {
    top: 10px;
  }

  &[data-type="e-config"],
  &[data-type="name"],
  &[data-type="ionization-energy"],
  &[data-type="atomic-mass"] {
    left: initial;
    right: calc(50% + 110px);

    .value {
      left: 100%;
      padding-left: 10px;
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
      padding: 0 10px;
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
    }

    .value {
      bottom: 0;
      font-size: 12px;
      left: 0;
      line-height: 1.4em;
      padding: 0 5px;
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
      padding: 0 20px;
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