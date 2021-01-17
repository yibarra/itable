import styled from 'styled-components';

// label
export const RangeSliderLabelContainer = styled.p`
  float: left;
  margin: 0;
  padding: 20px 10px 0;
  position: relative;
  text-align: center;
  width: 100%;

  .label,
  .value {
    color: ${({ theme }) => theme.text_color};
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.04em;
    line-height: 1em;
  }

  .label {
    margin: 3px 0 0 5px;
  }

  .value {
    font-size: 16px;
  }
`;