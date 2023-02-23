import styled from 'styled-components';

const StyledReachOut = styled.section`
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
  a {
    font-size: 14rem;
    line-height: 20rem;
    color: black;
          &:visited,
          &:active {
            color: black;
          }
  }
  @media only screen and (max-width: 960px) {
    a {
        font-size: 9rem;
        line-height: normal;
    }
  }
  @media only screen and (max-width: 480px) {
a {
    font-size: 5rem;
}
  }
`;

export const ReachOut = () => {
    return (
        <StyledReachOut>
            <h1>{"Don't"} be a stranger 🤗</h1>
            <p>I am currently looking for opportunities to broaden my horizons as a Frontend developer. Want to work together?</p>
            <a
                className='reach-out'
                href="mailto:talk2okwundu@outlook.com?subject=Let's work together!&body=Hello Victor, I would like us to work together on a project."
                target="_blank"
                rel="noopener noreferrer">
                Reach out!
            </a>
        </StyledReachOut>
    )
}
