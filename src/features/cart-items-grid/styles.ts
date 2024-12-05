import styled from "styled-components";

export const CartHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  text-align: center;
  font-size: 20px;
  &:last-child {
    width: 8%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 50px;
  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

export const ClearButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
  font-size: 20px;
  @media (max-width: 600px) {
    padding-right: 10px;
  }
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  padding: 10px 20px;
`;

export const SumContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 30px 0;
  font-size: 25px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
