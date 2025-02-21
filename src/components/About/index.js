import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAndroid, faGitAlt, faJava, faJsSquare, faReact, faNodeJs} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"About me".split("")}
                        idx={15}
                        />
                </h1>
                <p>I'm independent and self-motivated Software Developer with an aptitude
                    for problem solving and leadership. Skilled in programming in multiple
                    languages like Java, TypeScript, and C#.
                    I have over 2 years of experience in technologies like React, React Native, Android, and more.
                    Passionate to learn and work with new technologies.</p>
                <p>I'm quiet confident, naturally curious, and perpetually working on
                    improving my chops one design problem at a time.</p>
                <p>If I need to define myself in one sentence that would be a
                    hard-working, a anime fanatic, and tech-obsessed!!!</p>
            </div>
            <div className='stage-cube-cont'>
                <div className="cubespinner">
                <div className='face1'>
                    <FontAwesomeIcon icon={faJava} color="#ED1D25"/>
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faNodeJs} color="#0"/>
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faAndroid} color="#A4C639"/>
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                </div>
                <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                </div>
            </div>
            </div>
        </div>
            <Loader type="pacman" />
        </>

    )
}

export default About