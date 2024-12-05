import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 10;
  min-width: 250px;
`;

export const Button = styled.button`
  padding: 5px 20px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  background-color: gray;
`;
