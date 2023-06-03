import styled from "styled-components";
import fonts from "@/fonts";

const BannerContainer = styled.div`
  background-color: ${({ theme: { COLORS } }) => COLORS.WHITE};
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: ${fonts.inter.style.fontFamily};
    font-size: 4rem;

    span {
      font-weight: 700;
      color: #ae6fff;
    }
  }
`;

export default function Banner() {
  return (
    <BannerContainer>
      <p>
        Bem-vindo ao Blog do
        <br />
        <span>Thundar, o Protetor do Trovão</span>
      </p>
    </BannerContainer>
  );
}
