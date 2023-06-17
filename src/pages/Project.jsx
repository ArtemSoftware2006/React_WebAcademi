import React from 'react'
import image from "../img/projects/01-big.jpg"
import ButtonGitHub from '../components/UI/button/ButtonGitHub'

export default function Project() {
  return (
    <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video service</h1>

                <img src={image} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <ButtonGitHub/>

            </div>
        </div>
    </main>
  )
}
