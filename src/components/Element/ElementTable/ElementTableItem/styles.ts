import styled from "styled-components";

export const ElementTableItemContainer = styled.p`
  align-items: flex-end;
  display: inline-flex;
  flex-row: row wrap;
  float: left;
  margin: 0;
  padding: 5px 15px 10px;
  width: 50%;
  vertical-align: top;

  .label,
  .text {
    float: left;
    line-height: 1em;
    letter-spacing: -0.02em;
    position: relative;
    text-transform: capitalize;
    width: auto;
    vertical-align: top;
  }

  .label {
    font-size: 12px;
    margin: 0 5px 0 0;
  }

  .text {
    font-size: 15px;
    font-weight: 600;
    top: 2px;
  }
`;