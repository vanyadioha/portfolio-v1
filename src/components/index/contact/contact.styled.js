import styled from "styled-components";

const StyledContactForm = styled.section`
  padding: 2rem 0;
  h1 {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 0.3rem solid;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
  form {
    width: 100%;
    label,
    input,
    textarea {
      display: block;
    }
    label {
      margin-bottom: 1rem;
    }
    input,
    textarea {
      width: 100%;
      padding: 1rem;
      margin-bottom: 2rem;
    }
    input {
      &[type="submit"] {
        background-color: black;
        color: white;
      }
    }
  }
`;
export default StyledContactForm;
