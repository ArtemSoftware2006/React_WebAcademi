import React from 'react'
import { NavLink } from 'react-router-dom'

import "../../styles/main.css"

export default function ProjectItem({title, img, index}) {
  return (
    <NavLink to={`/project/${index}`}>
       <li className="project">
          <img src={img} alt="Project img" className="project__img"/>
          <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  )
}
