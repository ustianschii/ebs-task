import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 20px;
  margin-top: 50px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
    max-width: 95%;
  }
`;
