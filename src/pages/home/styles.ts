import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 20px;
  margin-top: 100px;
`;
