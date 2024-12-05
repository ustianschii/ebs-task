import styled from "styled-components";

export const Container = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 70%;
    flex-direction: column;
    gap: 5px;
  }
`;

export const CategorySelect = styled.select`
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
`;

export const SortButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #f0f0f0;
  border: 1px solid gray;
  border-radius: 10px;

  &:hover {
    background-color: #ddd;
  }
`;
