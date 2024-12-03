import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #ddd;
  text-align: center;
`;

export const Copyright = styled.p`
  font-size: 1rem;
  color: gray;
  margin: 0;
`;

export const Links = styled.nav`
  margin-top: 10px;
  display: flex;
  gap: 30px;
`;

export const Link = styled.a`
  text-decoration-color: black;
  color: black;
  font-size: 0.9rem;
`;
