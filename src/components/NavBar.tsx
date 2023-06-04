import styled, { css } from "styled-components";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  menuIsVisible: boolean;
};

export const Header = styled.header<HeaderProps>`
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
    button {
      display: none;
    }

    ul {
      list-style-type: none;
      display: flex;
      gap: 60px;

      li {
        a {
          color: white;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    @media (max-width: 700px) {
      ${({ menuIsVisible, theme: { COLORS: { PURLPLE } } }) => css`
        button {
          display: inline-block;
          position: fixed;
          z-index: 5;
          top: 40px;
          left: 10px;
          padding: 10px;
          background: none;
          border: none;
          display: flex;
          cursor: pointer;

          span {
            width: 28px;
            border-bottom: ${!menuIsVisible ? css`3px solid ${PURLPLE}` : css`none`};

            &::before,
            ::after {
              content: "";
              height: 3px;
              background-color: ${PURLPLE};
              width: 28px;
              display: block;
              margin-bottom: 6px;
              position: relative;
              transition: 0.5s;
            }

            ${menuIsVisible &&
            css`
              &::before {
                top: 8px;
                transform: rotate(135deg);
              }
              &::after {
                transform: rotate(-135deg);
              }
            `}
          }
        }

        ul {
          width: 40%;
          flex-direction: column;
          align-items: start;
          padding-left: 24px;
          padding-top: 100px;
          position: fixed;
          top: 0;
          left: 0;
          display: ${menuIsVisible ? "flex" : "none"};
          background-color: rgba(3, 3, 3, 0.79);
          height: 100vh;
          border-radius: 0 0 140px 0;
          transition: 1s;
        }
      `}
    }
  }

  @media (max-width: 700px) {
    justify-content: center;
  }

  @media (max-width: 400px) {
    justify-content: start;
  }
`;

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Header menuIsVisible={isVisible}>
      <Image alt="logo" src={Logo} width={300} />
      <nav>
        <button onClick={() => setIsVisible(!isVisible)}>
          <span />
        </button>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
