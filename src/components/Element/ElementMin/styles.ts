import styled from 'styled-components';

export const ElementMinDiv: any = styled.div`
  align-content: flex-end;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  flex-flow: row wrap;
  float: left;
  left: 1px;
  height: calc(100% - 2px);
  margin: 0;
  padding: 0;
  position: relative;
  transition: all var(--animation-time) var(--animation-bezier);
  text-align: center;
  top: 1px;
  width: calc(100% - 2px);
  vertical-align: top;

  .bg,
  &:before {
    background-color: ${({ theme }) => theme.second_color};
    border: none;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .bg {
    border: none;
    left: 0;
    height: 100%;
    opacity: 0;
    top: 0;
    width: 100%;
  }

  &[data-filter="true"] {
    opacity: 0.1;

    &[data-date="true"],
    &[data-atomic-radius="true"],
    &[data-atomic-mass="true"] {
      opacity: 1;
    }
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

    .bg {
      opacity: 1;
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

  @media(max-width: 480px) {
    &[data-empty="true"] {
      display: none;
    }
  }
`;
