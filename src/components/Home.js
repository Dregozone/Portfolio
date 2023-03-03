import React from 'react'
import '../css/home.css';
import Project from './Project'

const Home = ({projects}) => {
  return (
    <div>
        <section className="hero">
            Home
        </section>
        
        <h1>Tech stack</h1>
        <div>
            ...
        </div>

        <h1>About me</h1>
        <div>
            ...
        </div> 
        
        <h1>My projects</h1>
        <section className="projects">
            {projects.map((project, index) => {
                return <Project key={index} project={project} />
            })}
        </section>

        <h1>Contact me</h1>
        <div>
            ...
        </div>
    </div>
  )
}

export default Home
