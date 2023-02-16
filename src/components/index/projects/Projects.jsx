import StyledProjects from './projects.styled'
import { AiOutlineLink, AiOutlineGithub } from 'react-icons/ai'

export const Projects = () => {
    const projects = [
        {
            name: 'Enefty',
            description: 'An NFT tooling Web App that can be used to create and modify Algorand NFTs that conform to the ARC69 Standard. This project was my entry for the Algorand greenhouse hack_03',
            techStack: ['NextJS', 'Styled-Components',],
            links: { live: 'enefty.netlify.app', repo: 'https://github.com/thegr8khallie/enefty' }
        }
    ]
    return (
        <StyledProjects>
            <h1>Projects</h1>
            <p>
                Here are a few projects that i have worked on. Visit my GitHub <a href="https://github.com/thegr8khallie" target="_blank" rel="noopener noreferrer">Here</a>
            </p>
            <ul>
                {projects.map((i, j) => {
                    return (
                        <li key={`Project${j}`}>
                            <h2>{i.name}</h2>
                            <p>{i.description}</p>
                            <div>
                                {/* live */}
                                {i.links.live && (<a href={i.links.live} target="_blank" rel="noopener noreferrer"><AiOutlineLink /></a>)}
                                {/* repo */}
                                {i.links.repo && (<a href={i.links.repo} target="_blank" rel="noopener noreferrer"><AiOutlineGithub /></a>)}
                            </div>
                            <p className='techstack'>
                                {i.techStack.join(', ')}
                            </p>
                        </li>
                    )
                })}
            </ul>
        </StyledProjects>
    )
}
