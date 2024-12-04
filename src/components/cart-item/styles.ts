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

export const Quantity = styled.div`
  display: flex;
  width: 23%;
  align-items: center;
  justify-content: center;
  text-align: center;
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
