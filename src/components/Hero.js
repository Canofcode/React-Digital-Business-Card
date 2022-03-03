import React from "react";
import Heroimage from "../images/heroimage.png"

export default function Hero() {
    return (
        <div>
            <img className="heroimage" src={Heroimage} alt="heroimage"/>
        </div>
    )
}