import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export const Image = styled.img`
  height: 280px;
  min-width: 20%;
  @media (max-width: 600px) {
    width: 40%;
    height: 200px;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 600px) {
    display: block;
    width: 50%;
    justify-items: center;
  }
`;

export const Title = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    margin: 40px 0;
  }
`;

export const Quantity = styled.div`
  padding: 0 10px;
  text-align: center;
  font-size: 25px;
`;

export const IncDecButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  border: 2px solid gray;
  border-radius: 10px;
  padding: 5px 20px;
  &:hover {
    color: grey;
  }
  @media (max-width: 600px) {
    padding: 5px 10px;
  }
`;

export const Price = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const RemoveButton = styled.button`
  border-radius: 10px;
  height: 40px;
  cursor: pointer;
  display: flex;
  width: 8%;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  @media (max-width: 600px) {
    width: 15%;
    font-size: 13px;
    padding: 25px 0;
  }
`;
