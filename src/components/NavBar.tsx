import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 80px;
  width: 100%;
  background-color: ${({
    theme: {
      COLORS: { GRAY_700 },
    },
  }) => GRAY_700};

  nav {
    display: flex;
    gap: 60px;

    a {
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default function NavBar() {
  return (
    <Header>
      <Image alt="logo" src={Logo} width={300} />
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </Header>
  );
}
