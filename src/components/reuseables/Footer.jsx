import styled from "styled-components"
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineCopyrightCircle } from 'react-icons/ai'

const StyledFooter = styled.footer`
    height: 5rem;
    width: calc(100% - 16rem);
    max-width: 153.6rem;
    padding: 2rem 0;
    position: absolute;
    /* bottom: 0; */
    left: 50%;
    transform: translateX(-50%);
    border-top: .3rem solid #d0d0d0;
    text-align: center;
    display: flex;
    justify-content: space-between;
    ul {
        display: flex;
        gap: 2rem;
        li {
            font-size: 3rem;
            a {
                &, &:active, &:visited {
                    color: black;
                }
            }
        }
    }
    @media only screen and (max-width: 480px){
        width: calc(100% - 4rem);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
        gap: 2rem;
    }
`

const Footer = () => {
    const socials = [
        {
            name: 'MA',
            icon: AiOutlineMail,
            link: "mailto:talk2okwundu@outlook.com?subject=Let's work together!&body=Hello Victor, I would like us to work together on a project.",
        },
        {
            name: 'TW',
            icon: AiOutlineTwitter,
            link: 'https://twitter.com/thegr8khallie',
        },
        {
            name: 'LI',
            icon: AiOutlineLinkedin,
            link: 'www.linkedin.com/in/victor-anyadioha-76b9a41b8',
        },
        {
            name: 'GH',
            icon: AiOutlineGithub,
            link: 'https://github.com/thegr8khallie',
        },
    ]
    return (
        <StyledFooter>
            <p><AiOutlineCopyrightCircle />2023 - Built by Victor Anyadioha</p>
            <ul>
                {socials.map((i) => {
                    return (
                        <li key={i.name}>
                            <a
                                href={i.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                <i.icon />
                            </a>
                        </li>
                    )
                })}
            </ul>
        </StyledFooter>
    )
}

export default Footer