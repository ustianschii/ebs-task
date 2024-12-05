import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ddd;
`;

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 10px;
  }

  @media (min-width: 1200px) {
    min-width: 1200px;
  }
`;

export const Nav = styled.nav``;

export const NavItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 2rem;
  transition: 0.2s;

  &:hover {
    color: gray;
  }
`;

export const CartButton = styled.button`
  background-color: black;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
`;
