import styled from 'styled-components';

const StyledReachOut = styled.section`

`

export const ReachOut = () => {
    return (
        <StyledReachOut>
            <h1>Want to work together?</h1>
            <a
                href="mailto:talk2okwundu@outlook.com?subject=Let's work together!&body=Hello Victor, I would like us to work together on a project."
                target="_blank"
                rel="noopener noreferrer">
                Reach out
            </a>
        </StyledReachOut>
    )
}
