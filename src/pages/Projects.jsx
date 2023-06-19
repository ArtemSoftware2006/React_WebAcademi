import React from 'react'

import ProjectItem from "../components/project/Project";

import {projectList} from "../helpers/projectsList";

export default function Projects() {
  return (
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
               
               {projectList.map((project, index) =>{
                  return(
                    <ProjectItem 
                      key={index} 
                      title={project.title} 
                      img={project.img} 
                      index={index}
                      />
                  )
               })}

              </ul>
          </div>
      </main>
  )
}
