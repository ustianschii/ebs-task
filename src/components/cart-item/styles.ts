import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
  padding-bottom: 10px;
`;

export const Image = styled.img`
  height: 280px;
  width: 23%;
`;

export const Title = styled.div`
  display: flex;
  width: 23%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const QuantityContainer = styled.div`
  display: flex;
  width: 23%;
  align-items: center;
  justify-content: center;
`;

export const Quantity = styled.div`
  padding: 0 10px;
  text-align: center;
  font-size: 18px;
`;

export const IncDecButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 5px;
  &:hover {
    color: grey;
  }
`;

export const Price = styled.div`
  display: flex;
  width: 23%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const RemoveButton = styled.button`
  background-color: white;
  border-radius: 10px;
  height: 40px;
  cursor: pointer;
  display: flex;
  width: 8%;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
