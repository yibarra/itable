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

  &[data-empty="true"] {
    pointer-events: none;
  }

  &[data-group="true"] {
    opacity: 0.3;
  }

  &[data-group-item="true"] {
    opacity: 1;

    .atomic-number,
    .symbol {
      color: ${({ theme }: any) => theme.background_color};
    }

    .name {
      color: ${({ theme }: any) => theme.background_color};
      transition-duration: 0s;
      transition-delay: 0s;

      &:before {
        display: none;
      }
    }
  }

  &[data-active="true"],
  &:hover {
    .atomic-number,
    .symbol {
      color: ${({ theme }: any) => theme.background_color};
    }
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
