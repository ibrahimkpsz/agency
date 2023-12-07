import React from 'react'
import ProjectImage from '../../../assets/images/laptop_mockup.jpg'

function ProjectCard({projects}) {
  return (  
    <>
    {projects.map((project, index) => (
      <div className='col mb-4'>
          <div className='project-card shadow-sm rounded-4'>
            <img src={ProjectImage} className='img-fluid' alt="" />
            <p key={index} className='project-title'>{project.title}</p>
            <p key={index} className='project-text'>{project.desc}</p>
            <a href={project.link} className='btn btn-link p-0 text-danger'>İncele</a>
          </div>
      </div>
     ))}
    </>
    
  )
}

export default ProjectCard