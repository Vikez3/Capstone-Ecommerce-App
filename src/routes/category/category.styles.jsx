import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    /* row-gap: 20px; */
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
