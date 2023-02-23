import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
    width: calc(100% - 16rem);
    max-width: 153.6rem;
    height: 8rem;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    border-bottom: .3rem solid #d0d0d0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 480px){
        width: calc(100% - 4rem);
    }
`

const Nav = () => {
    return (
        <StyledNav>
            <div className='clock-container'>
                <h1>{'12:45'} WAT</h1>
            </div>
            <div className='theme-pill-container'>
                theme
            </div>
        </StyledNav>
    )
}

export default Nav