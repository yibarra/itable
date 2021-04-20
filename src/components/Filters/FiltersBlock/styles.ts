import styled from "styled-components";

export const FiltersBlockContainer = styled.div`
  float: left;
  padding: 10px 20px 0;
  position: relative;
  text-align: center;
  width: 100%;

  /* Extra Small Devices, Phones */ 
  @media only screen and (max-width : 480px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow: hidden;
    overflow-x: auto;
    padding: 10px 0;
    pointer-events: auto;
  }
`;