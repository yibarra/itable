import styled from "styled-components";

export const FiltersBlockItemDescriptionContainer = styled.div`
  left: calc((100% / 18) * 2.5);
  opacity: 0;
  padding: 0 5px 0;
  position: absolute;
  top: calc(100% + 60px);
  transition: all var(--animation-time) var(--animation-bezier);
  text-align: left;
  width: calc((100% / 18) * 9.2);

  .text {
    font-size: 11px;
    line-height: 1.4em;
    letter-spacing: -0.02em;
  }

  &[data-active="true"] {
    animation: element-in var(--animation-time) var(--animation-bezier) 0s 1 forwards;
  }

  @media only screen and (max-width : 992px) {
    display: none;
  }

  @keyframes element-in {
    0% {
      opacity: 0;
      top: calc(100% + 60px);
    }
    70% {
      opacity: 1;
      top: calc(100% + 10px);
    }
    100% {
      opacity: 1;
      top: calc(100% + 10px);
    }
  }
`;