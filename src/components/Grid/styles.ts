import styled from 'styled-components';

export const GridDiv = styled.div`
  margin: 0;
  max-width: var(--max-width);
  padding: 120px 0 0;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 3;

  > div {
    width: calc(100% / 18);
  }
`;