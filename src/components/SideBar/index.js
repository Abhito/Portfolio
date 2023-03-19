import './index.scss'
import {Link, NavLink} from "react-router-dom";
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faClose, faEnvelope, faHome, faSuitcase, faUser} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {useState} from "react";

//TODO: Personalize
const SideBar = () => {

    const [showNav, setShowNav] = useState(false);

    return(
    <div className='nav-bar'>
        <Link className='logo' to='/Portfolio'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="abhinav"/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink
                onClick={() => setShowNav(false)}
                exact="true" activeclassname="active" to="/Portfolio">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)}
                activeclassname="active" className="about-link" to="/Portfolio/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)}
                activeclassname="active" className="portfolio-link" to="/Portfolio/myportfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink
                onClick={() => setShowNav(false)}
                activeclassname="active" className="contact-link" to="/Portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon'
            />
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer'
                   href="https://www.linkedin.com/in/abhinav-singhal-0b938b194/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer'
                   href="https://github.com/Abhito">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
        <FontAwesomeIcon
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon'
        />
    </div>
    )
}

export default SideBar