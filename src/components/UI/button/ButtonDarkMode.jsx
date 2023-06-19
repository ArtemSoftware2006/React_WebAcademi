import React from 'react'

import sun from "../../../img/icons/moon.svg";
import moon from "../../../img/icons/sun.svg"

export default function ButtonDarkMode() {
  return (
    <button className="dark-mode-btn">
        <img src={sun}alt="Light mode" className="dark-mode-btn__icon"/>
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
    </button>
  )
}
