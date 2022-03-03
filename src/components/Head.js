import React from "react";
import Heroimage from "../images/heroimage.png"
import "../style.css"

export default function Head() {
    return (
        <div>
            <header>
                <img className="heroimage" src={Heroimage} alt="heroimage"/>
            </header>
        </div>
    )
}