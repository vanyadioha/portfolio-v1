import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
    width: calc(100% - 16rem);
    height: 8rem;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    border-bottom: .3rem solid #d0d0d0;
    div {
        position: relative;
        width: 100%;
        height: 100%;
        h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
        }
    }
`

const Nav = () => {
    return (
        <StyledNav>
            <div>
                <h1>Victor Anyadioha</h1>
            </div>
        </StyledNav>
    )
}

export default Nav