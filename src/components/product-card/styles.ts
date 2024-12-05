import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid gray;
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const TitlePriceBox = styled.div`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 600px) {
    min-height: 170px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 260px;
  @media (max-width: 600px) {
    height: 200px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
    margin: 10px 0;
  }
`;

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  @media (max-width: 600px) {
  }
`;

export const Description = styled.p`
  color: gray;
  margin-bottom: 10px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Category = styled.p`
  color: gray;
  margin-bottom: 10px;
`;

export const Rating = styled.p`
  color: orange;
`;

export const CartButton = styled.button<{ incart: boolean }>`
  width: 100%;
  padding: 10px 20px;
  background-color: ${(props) => (props.incart ? "red" : "green")};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
`;
