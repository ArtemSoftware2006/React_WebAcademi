import React from 'react'
import {  useEffect} from 'react';
import { useLocalStorage } from '../../../utils/UseLocalStorage';
import detectDarkMode from '../../../utils/detectDarkMode';

import sun from "../../../img/icons/moon.svg";
import moon from "../../../img/icons/sun.svg"

export default function ButtonDarkMode() {
    
    const btnNormal = "dark-mode-btn";
    const btnActive = "dark-mode-btn--active dark-mode-btn"
    //Костомный хук
    const [darkMode, setDarkMode] = useLocalStorage('darkMode',detectDarkMode())

    //Для изменения темы
    useEffect(() =>{
        if(darkMode === "dark"){
            document.body.classList.add('dark');
        }
        else{
            document.body.classList.remove('dark');
        }

    }, [darkMode])
    //При изменнеии темы в ОС
    useEffect(() =>{
        window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
            const newColorScheme = event.matches ? "dark" : "light";
            setDarkMode(newColorScheme);
    });

    })

    //При нажатии
    const toggleDarkMode = () =>{
      setDarkMode((currentValue) =>{
        return currentValue === "dark"? "ligth" : "dark";
      })
  }

  return (
    <button className={darkMode === "dark" ? btnActive : btnNormal}
     onClick={toggleDarkMode}>
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
        <img src={sun}alt="Light mode" className="dark-mode-btn__icon"/>
    </button>
  )
}
