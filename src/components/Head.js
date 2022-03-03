import React from "react";
import Heroimage from "../images/heroimage.png"
import Mail from "../images/mail.png"
import Linkedin from "../images/linkedin.png"
import "../style.css"

export default function Head() {
    return (
        <div>
            <header>
                <img className="head--heroimage" src={Heroimage} alt="heroimage"/>
            </header>

            <div className="head--wrapper">
                <h1>Laura Smith</h1>
                <h4>Frontend Developer</h4>
                <a href="www.google.com">
                    <p className="head--websitelink"><small>Laurasmith.website</small></p>
                </a>
            </div>

            <div className="head--buttonwrapper">
                <button className="head--button_email">
                    <img className="head--buttonicon" src={Mail} alt="mailimage"/>
                    <p>Email</p>
                </button>

                <button className="head--button_linkedin">
                    <img className="head--buttonicon" src={Linkedin} alt="mailimage"/>
                    <p>Linkedin</p>
                </button>
            </div>
        </div>
    )
}