import React from "react";
import Twitter from "../images/twitter.png"
import Facebook from "../images/facebook.png"
import Instagram from "../images/instagram.png"
import GitHub from "../images/github.png"

import "../style.css";

export default function Footer() {
    return(
        <div className="footer--wrapper">
            <a href="https://twitter.com/">
                <img src={Twitter} alt="twitterImg"/>
            </a>

            <a href="https://www.facebook.com/">
                <img src={Facebook} alt="facebookImg"/>
            </a>

            <a href="https://www.instagram.com/">
                <img src={Instagram} alt="instagramImg"/>
            </a>

            <a href="https://github.com/">
                <img src={GitHub} alt="githubImg"/>
            </a>
        </div>
    )
}