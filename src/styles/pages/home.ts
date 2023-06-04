import styled from "styled-components";
import fonts from "@/fonts";

export const BannerContainer = styled.div`
  background-color: ${({ theme: { COLORS } }) => COLORS.WHITE};
  width: 100%;
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 80px;

  p {
    font-family: ${fonts.inter.style.fontFamily};
    font-size: 4rem;

    span {
      font-weight: 700;
      color: #ae6fff;
    }
  }

  @media (max-width: 750px) {
    p {
      font-size: 3rem;
    }
  }

  @media (max-width: 430px) {
    p {
      font-size: 2rem;
    }
  }

`;

export const ContainerSections = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionPosts = styled.section`
  width: 100%;
  padding: 0 80px;
`;
