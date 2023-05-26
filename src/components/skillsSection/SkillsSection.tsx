import './SkillsSection.scss'

export interface ISkillsSectionProps {
    skills: string[]
}

export const SkillsSection = ({ skills }: ISkillsSectionProps) => (
    <>
        <h5 className='skillsTitle'>Skills:</h5>
        <ul>
            {skills.map((skill, index) => (
                <li className='skillsItem' key={index}>{skill}</li>
            ))}
        </ul>
    </>
)
