import '../styles/project-styles.css'

function Projects({projectImg, projectTitle, projectDesc, techStack}) {
    return (
        <div className='project-card'>
            <img src={projectImg}></img>
            <div className='project-content'>
                <h3>{projectTitle}</h3>
                <p>{projectDesc}</p>
                <div className='tech-stack'>
                    { 
                        techStack.map((tool, i) => (
                            <small key={i}>{tool}</small>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export default Projects