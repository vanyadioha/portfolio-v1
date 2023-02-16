import styled from "styled-components";

const StyledProjects = styled.section`
  padding: 2rem 0;
  h1 {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 0.3rem solid;
    margin-bottom: 1rem;
  }
  ul {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-auto-rows: auto;
    margin-top: 2rem;
    li {
      padding: 1rem;
      border: 0.2rem solid black;
      h2 {
        margin-bottom: 2rem;
      }
      div {
        margin-top: 2rem;
        a {
          display: inline-block;
          margin-right: 2rem;
          font-size: 2rem;
          &:visited,
          &:active {
            color: black;
          }
        }
      }
    }
  }
`;
export default StyledProjects;
