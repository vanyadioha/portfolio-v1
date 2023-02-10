import styled from "styled-components";

const StyledHero = styled.main`
  width: 100%;
  display: flex;
  height: 80vh;
  padding: 2rem 0;
  justify-content: space-between;
  .hero-text-container,
  .hero-img-container {
    flex-basis: 49%;
    height: 100%;
  }
  .hero-text-container {
    position: relative;
    h1 {
      width: 100%;
      padding: 1rem 0;
      border-bottom: 0.3rem solid;
      margin-bottom: 2rem;
    }
    div {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 1rem;
      button {
        border: 0.2rem solid #000;
        width: 100%;
        padding: 1rem;
        &:first-child {
          margin-bottom: 1rem;
          background-color: transparent;
        }
        &:last-child {
          background-color: #000;
          color: #f1f1f1;
        }
      }
    }
  }
  .hero-img-container {
  }
`;
export default StyledHero;
