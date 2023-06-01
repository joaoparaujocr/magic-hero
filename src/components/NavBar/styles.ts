import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  background-color: ${({
    theme: {
      COLORS: { GRAY_700 },
    },
  }) => GRAY_700};
`;
