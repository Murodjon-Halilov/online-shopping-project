import { styled } from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  max-width: 1440px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 40px;
  row-gap: 50px;
`;
