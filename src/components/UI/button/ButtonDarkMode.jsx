import React from 'react'
import {  useEffect, useRef} from 'react';
import { useLocalStorage } from '../../../utils/UseLocalStorage';
import detectDarkMode from '../../../utils/detectDarkMode';

import sun from "../../../img/icons/moon.svg";
import moon from "../../../img/icons/sun.svg"

export default function ButtonDarkMode() {
    
    const btnRef = useRef(null) 
    const [darkMode, setDarkMode] = useLocalStorage('darkMode',detectDarkMode())

    useEffect(() =>{
        if(darkMode === "dark"){
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn--active');
        }
        else{
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn--active');
        }

    }, [darkMode])

    const toggleDarkMode = () =>{
      setDarkMode((currentValue) =>{
        return currentValue === "dark"? "ligth" : "dark";
      })
  }

  return (
    <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        <img src={sun}alt="Light mode" className="dark-mode-btn__icon"/>
    </button>
  )
}
