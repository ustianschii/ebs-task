import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  min-height: 80vh;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 50px;
`;

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
  &:last-child {
    width: 8%;
  }
`;
