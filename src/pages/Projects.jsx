import React from 'react'

import Project from "../components/project/Project";

import {Projects} from "../helpers/projectsList"

export default function Projects() {
  return (
    <main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
               
               {Projects.map(() =>{
                  return(
                    <Project/>
                  )
               })}

              </ul>
          </div>
      </main>
  )
}
