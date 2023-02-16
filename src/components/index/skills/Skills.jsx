import React from 'react'
import StyledSkills from './Skills.styled'

export const Skills = () => {
    const hardSkills = ['HTML5', 'CSS3', 'Javascript ES6+', 'Typescript', 'Axios', 'SCSS', 'ReactJS', 'NextJS', 'Styled Components', 'Framer Motion', 'Git & Github', 'Responsive Design', 'SEO', 'Accessibilty'];
    const softSkills = ['Fast Learner', 'Reliability', 'Meeting deadlines', 'Thorough', 'Working under pressure',];
    return (
        <StyledSkills>
            <h1>Skills</h1>
            <p>Why should you hire me?</p>
            <div>
                <h2>Hard Skills</h2>
                <ul>
                    {hardSkills.map((i, j) => {
                        return (
                            <li key={`HS${j}`}>{i}</li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <h2>Soft Skills</h2>
                <ul>
                    {softSkills.map((i, j) => {
                        return (
                            <li key={`SS${j}`}>{i}</li>
                        )
                    })}
                </ul>
            </div>
        </StyledSkills>
    )
}
