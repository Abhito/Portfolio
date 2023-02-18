import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from "react-router-dom";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['b','h','i','n','a','v',',']
    const jobArray = "Software Developer.".split("")

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="A"/>
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={nameArray}
                                     idx={15}/>
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={jobArray}
                                     idx={17}/>
                </h1>
                <h2>Full-Stack Developer / Backend Developer / Game Programmer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
                <Logo />
        </div>
            <Loader type="pacman"/>
        </>
    );
}

export default Home