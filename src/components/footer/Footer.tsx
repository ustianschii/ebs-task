import { Container, Copyright, Links, Link } from "./styles";

const links = [
  { name: "Privacy Policy", href: "#privacy-policy" },
  { name: "Terms of Service", href: "#terms-of-service" },
  { name: "Support", href: "#support" },
];

export default function Footer() {
  return (
    <Container>
      <Copyright>
        &copy; {new Date().getFullYear()} Cool Store. All rights reserved.
      </Copyright>
      <Links>
        {links.map(({ name, href }) => (
          <Link href={href}>{name}</Link>
        ))}
      </Links>
    </Container>
  );
}
