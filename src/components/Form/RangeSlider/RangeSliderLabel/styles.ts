import styled from 'styled-components';

// label
export const RangeSliderLabelDiv = styled.div`
  float: none;
  margin: 0;
  padding: 0 10px 0;
  position: relative;
  text-align: center;
  width: 100%;

  .label,
  .value {
    color: ${({ theme }) => theme.text_color};
  }

  .label {
    margin: 3px 0 0 5px;
  }

  .value {
    font-size: 14px;
  }
`;