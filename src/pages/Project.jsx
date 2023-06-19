import React from 'react'
import { useParams } from 'react-router-dom'

import { projectList } from '../helpers/projectsList'

import image from "../img/projects/01-big.jpg"
import ButtonGitHub from '../components/UI/button/ButtonGitHub'

export default function Project() {
  const {id} = useParams();
  const project = projectList[id];
  return (
    <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{project.title}</h1>

                <img src={project.img} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{project.title}</p>
                </div>

                {project.skill &&(
                   <div className="project-details__desc">{project.skill}</div>
                )}

                <ButtonGitHub/>

            </div>
        </div>
    </main>
  )
}
