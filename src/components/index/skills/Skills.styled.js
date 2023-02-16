import styled from "styled-components";

const StyledSkills = styled.section`
  h1 {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 0.3rem solid;
    margin-bottom: 1rem;
  }
  div {
    margin-top: 2rem;
    h2 {
      margin-bottom: 1rem;
    }
    ul {
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      grid-auto-rows: auto;
      li {
        border: 0.2rem solid black;
        display: grid;
        place-items: center;
        text-align: center;
        padding: 1rem;
      }
    }
  }
`;
export default StyledSkills;
