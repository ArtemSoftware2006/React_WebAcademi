import React from 'react'
import { useState , useEffect, useRef} from 'react';
import sun from "../../../img/icons/moon.svg";
import moon from "../../../img/icons/sun.svg"

export default function ButtonDarkMode() {
  
    const [darkMode, setDarkMode] =  useState('ligth')
    const btnRef = useRef(null) 

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
