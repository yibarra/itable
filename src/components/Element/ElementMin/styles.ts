import styled from 'styled-components';

export const ElementMinDiv: any = styled.div`
  align-content: flex-end;
  align-items: center;
  border: 1px solid transparent;
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

  .name {
    transition: none;
  }

  &[data-filter="true"] {
    pointer-events: none;
    opacity: 0.05;

    &[data-date="true"],
    &[data-group="true"],
    &[data-atomic-mass="true"],
    &[data-radius="true"] {
      pointer-events: auto;
      opacity: 1;
    }
  }

  &[data-group="true"] {
    .atomic-number,
    .name,
    .symbol {
      color: ${({ theme }: any) => theme.background_color};
      opacity: 1;
      transition-duration: 0s;
    }

    .name {
      transition-delay: 0s;

      &:before {
        display: none;
      }
    }

    .bg {
      opacity: 1;
    }
  }

  &[data-radius="true"] {
    .atomic-number,
    .name,
    .symbol {
      color: inherit;
      opacity: 1;
      transition: none;
      transition-delay: 0s;
    }

    .bg,
    .symbol {
      opacity: 0;
    }
    
    .radius {
      display: inline-block;
    }

    &:hover {
      .bg {
        opacity: 1;
      }

      .symbol {
        opacity: 0;
      }

      .atomic-number,
      .name {
        color: ${({ theme }: any) => theme.background_color};
      }

      .name {
        &:before {
          display: none;
        }
      }

      .radius {
        background-color: ${({ theme }: any) => theme.background_color} !important;
      }
    }

    &:before {
      display: none;
    }
  }

  &[data-active="true"],
  &:hover {
    .bg {
      opacity: 1;
    }

    .atomic-number,
    .name,
    .symbol {
      color: ${({ theme }: any) => theme.background_color};
      opacity: 1;
    }

    .name {
      transition: none;
    }

    &[data-group="true"] {
      .name {
        &:before {
          display: none;
        }
      }
    }
  }
`;
