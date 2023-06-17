import React from 'react'
import gitHubIcon from "../../../img/icons/gitHub-black.svg"
import "../../../styles/main.css"

export default function ButtonGitHub() {
  return (
    <a href="#!" className="btn-outline">
    <img src={gitHubIcon} alt=""/>
    GitHub repo
</a>
  )
}
