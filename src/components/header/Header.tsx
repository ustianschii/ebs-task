import { Container, Nav, NavItem, CartButton, Toolbar } from "./styles";

export default function Header() {
  return (
    <Container>
      <Toolbar>
        <Nav>
          <NavItem href="/">Home</NavItem>
        </Nav>
        <a href="/cart">
          <CartButton>🛒</CartButton>
        </a>
      </Toolbar>
    </Container>
  );
}
