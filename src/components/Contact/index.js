import './index.scss'
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) =>{
        e.preventDefault()

        emailjs.sendForm(
                'service_7pzj3sg',
                'template_f0j4wyp',
                refForm.current,
                '7uNp5tSbHmpzJdujz')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again.')
                }
            )
    }
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Contact Me".split("")}
                            idx={15}/>
                    </h1>
                    <p>
                        I an interested in any job opportunities - especially ambitious
                        or large projects. However, if you have other requests or questions,
                        don't hesitate to contact me using the form below either.
                    </p>
                      <div className='contact-form'>
                          <form ref={refForm} onSubmit={sendEmail}>
                              <ul>
                                  <li className="half">
                                      <input type="text" name="name" placeholder="Name" required/>
                                  </li>
                                  <li className="half">
                                      <input type="email" name="email" placeholder="Email" required/>
                                  </li>
                                  <li>
                                      <input type="text" name="subject" placeholder="Subject" required/>
                                  </li>
                                  <li>
                                      <textarea placeholder="Message"
                                      name="message"
                                      required></textarea>
                                  </li>
                                  <li>
                                      <input type="submit" className="flat-button" value="SEND"/>
                                  </li>
                              </ul>
                          </form>
                      </div>
                </div>
                <div className='info-map'>
                    Abhinav Singhal,
                    <br/>
                    United States of America,
                    <br/>
                    Guilderland, New York, 12084 <br/>
                    <span>singhalabhinav0427@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[42.697640, -73.888181]} zoom={13}>
                        <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[42.697640, -73.888181]}>
                            <Popup>Abhinav lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman"/>
        </>
    )
}

export default Contact