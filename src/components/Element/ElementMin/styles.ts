import styled from 'styled-components';

export const ElementMinContainer: any = styled.div`
  align-content: flex-end;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  flex-flow: row wrap;
  float: left;
  margin: 1px;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: center;
  transition: all var(--animation-time) var(---animation-bezier);
  width: 100%;
  vertical-align: top;

  &[data-active="true"],
  &:hover {
    .atomic-number,
    .symbol {
      color: ${({ theme }: any) => theme.background_color};
    }
  }

  &[data-empty="true"] {
    pointer-events: none;
  }

  @media(max-width: 768px) {
    height: 65px !important;
  }

  @media(max-width: 480px) {
    height: 70px !important;
    
    &[data-empty="true"] {
      display: none;
    }
  }
`;
