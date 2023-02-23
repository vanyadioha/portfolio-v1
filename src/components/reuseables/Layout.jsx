import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Nav from './Nav'
import { useRouter } from 'next/router'
import { ReachOut } from './ReachOut'

const StyledMain = styled.main`
    width: 100vw;
    background-color:hsla(0,0%,100%,1);
background-image:
radial-gradient(at 76% 24%, hsla(155,0%,90%,1) 0px, transparent 50%),
radial-gradient(at 78% 74%, hsla(148,0%,90%,1) 0px, transparent 50%),
radial-gradient(at 25% 72%, hsla(110,0%,90%,1) 0px, transparent 50%),
radial-gradient(at 54% 51%, hsla(0,2%,67%,1) 0px, transparent 50%),
radial-gradient(at 24% 25%, hsla(0,0%,90%,1) 0px, transparent 50%);
    > div {
        width: 100%;
        backdrop-filter: blur(2rem);
        overflow: scroll;
        overflow-x: hidden;
        padding: 8.3rem 8rem 5.3rem;
        display: grid;
        justify-items: center;
        > div {
            width: 100%;
            max-width: 153.6rem;
        }
        &::-webkit-scrollbar {
            width: 1.2rem;
        }
    
 &::-webkit-scrollbar-track {
  background: #555;
    border-radius: 5rem;
}
 

&::-webkit-scrollbar-thumb {
  background: #888;
    border-radius: 5rem;
  border: 0.3rem solid #555;
}


&::-webkit-scrollbar-thumb:hover {
  background: #aaa; 
}
    }
@media only screen and (max-width: 480px) {
    > div {
        padding: 8.3rem 2rem 5rem;
    }
}
`

export const Layout = ({ children }) => {
    const route = useRouter();
    return (
        <StyledMain>
            <div>
                <div>
                    <Nav />
                    {children}
                    {route.pathname !== "/" && <ReachOut />}
                    <Footer />
                </div>
            </div>
        </StyledMain>
    )
}
