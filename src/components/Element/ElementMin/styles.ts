import styled from 'styled-components';

export const ElementMinDiv: any = styled.div`
  align-content: flex-end;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  flex-flow: row wrap;
  float: left;
  height: calc(100% - 1px);
  margin: 0;
  padding: 1px;
  position: relative;
  text-align: center;
  width: 100%;
  vertical-align: top;

  &:before {
    background-color: ${({ theme }) => theme.second_color};
    border: 2px solid ${({ theme }) => theme.second_color};
    content: '';
    height: calc(100% - 2px);
    left: 0;
    position: absolute;
    top: 1px;
    width: 100%;
    z-index: -1;
  }

  &[data-empty="true"] {
    pointer-events: none;

    &:before {
      display: none;
    }
  }

  &[data-group="true"] {
    .atomic-number,
    .name,
    .symbol {
      opacity: 0.3;
      transition-delay: 0s;
    }
  }

  &[data-group-item="true"] {
    .atomic-number,
    .symbol {
      color: ${({ theme }: any) => theme.background_color};
      opacity: 1;
      transition-duration: 0s;
    }

    .name {
      color: ${({ theme }: any) => theme.background_color};
      opacity: 1;
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
    .name,
    .symbol {
      opacity: 1;
    }
    
    .atomic-number,
    .symbol {
      color: ${({ theme }: any) => theme.background_color};
    }

    .name {
      &:before {
        display: inline-block;
      }
    }

    &[data-group-item="true"] {
      .name {
        &:before {
          display: none;
        }
      }
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
