import styled from 'styled-components';

// label
export const RangeSliderLabelDiv = styled.div`
  float: none;
  margin: 10px 0 0;
  padding: 0 10px 5px;
  position: relative;
  text-align: center;
  width: auto;

  .label,
  .value {
    color: ${({ theme }) => theme.text_color};
  }

  .label {
    margin: 0 0 0 5px;
    top: 2px;
  }

  .value {
    font-size: 14px;
  }
`;