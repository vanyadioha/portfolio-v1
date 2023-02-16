import styled from "styled-components"

const StyledFooter = styled.footer`
    height: 5rem;
    width: calc(100% - 16rem);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-top: .3rem solid #d0d0d0;
    text-align: center;
`

const Footer = () => {
    return (
        <StyledFooter>
            Hello
        </StyledFooter>
    )
}

export default Footer