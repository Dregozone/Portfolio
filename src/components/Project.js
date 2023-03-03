import React from 'react'

const Project = ({project}) => {
  return (
    <div className="project">
        <div className="projectBody">
            <div className="projectImageContainer">
                <img src={project.img} alt={project.title + ' image'} />
            </div>

            <div>
                <h2>{project.title}</h2>

                <div className="projectDescription">
                    {project.description}
                </div>
 
                <div className="tags">
                    Tags:
                    {project.tags.map((tag, index) => {
                        return <div className="ml-2" key={index}>{tag}</div>
                    })}
                </div>
            </div>

            <div className="buttonGroup">
                <a className="btn btn-light mb-1" href={project.demoLink}>Live Demo</a>
                <a className="btn btn-secondary" href={project.githubLink}>Github</a>
            </div>
        </div>
    </div>
  )
}

export default Project
