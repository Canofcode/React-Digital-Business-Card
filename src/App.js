import React from "react";
import Head from "./components/Head";
import Main from "./components/Main"
import "./style.css";

export default function App() {
    return (
        <div className="wrapper">
            <Head/>
            <Main/>
       </div>
    )
}