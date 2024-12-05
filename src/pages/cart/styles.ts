import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  min-height: 80vh;
  @media (max-width: 600px) {
    margin-top: 0px;
  }
`;
