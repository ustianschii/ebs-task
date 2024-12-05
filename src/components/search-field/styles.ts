import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px 20px;
  border: 1px solid gray;
  border-radius: 10px;

  &:focus {
    border-color: black;
  }
`;
