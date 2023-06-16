import React from 'react'

import vk from "../../img/icons/vk.svg";
import gitHub from "../../img/icons/gitHub.svg"
export default function Footer() {
  return (
    <div>
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
