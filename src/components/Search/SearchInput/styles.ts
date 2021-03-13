import styled from 'styled-components';

export const SearchInputDiv = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  flex-flow: row wrap;
  float: none;
  margin: 0 5px 0 0;
  position: relative;
  width: auto;

  .btn-icon {
    left: -30px;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

export const SearchTermI = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.text_color};
  color: ${({ theme }) => theme.text_color};
  font-size: 14px;
  margin: 0;
  outline: none;
  letter-spacing: -0.04em;
  padding: 0 0 5px;
  text-align: left;
  text-transform: capitalize;
  width: 2px;
  white-space: nowrap;

  &:focus,
  &[value]:not([value=""]) {
    width: 160px;
  } 
`;