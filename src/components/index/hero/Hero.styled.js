const bald = styled;
import styled from "styled-components";

const StyledHero = styled.header`
  width: 100%;
  height: calc(100vh - 8.3rem);
  display: grid;
  place-items: center;
  padding: 4rem;

  h1 {
    font-size: 12rem;
  }
  p {
    &:last-child {
      margin-top: 4rem;
    }
  }
  @media only screen and (max-width: 960px) {
    h1 {
      font-size: 9rem;
    }
  }
  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 4rem;
    }
  }
`;

export default StyledHero;
