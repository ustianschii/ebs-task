import styled, { keyframes } from "styled-components";

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

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  border: 5px solid gray;
  border-top: 5px solid blue;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
