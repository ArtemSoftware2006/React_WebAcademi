import React from 'react'
import { NavLink } from 'react-router-dom';

import ButtonDarkMode from '../UI/button/ButtonDarkMode';

export default function Navbar() {

    const activeLink = "nav-list__link nav-list__link--active";
    const normLink = "nav-list__link";


  return (
    <div>
        <nav className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <ul className="nav-list">
                        
                        <li className="nav-list__item">
                            <NavLink className={({isActive}) => isActive ? activeLink : normLink} to="/">
                                Home 
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink className={({isActive}) => isActive ? activeLink : normLink} to="/Projects">
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink className={({isActive}) => isActive ? activeLink : normLink} to="/Contacts">
                                Contacts
                            </NavLink>
                        </li>
                    </ul>

                    <ButtonDarkMode/>
                </div>
            </div>
        </nav>
    </div>
  )
}
