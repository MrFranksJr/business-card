import React from "react"
import InterestText from "./InterestText"
import AboutText from "./AboutText"

export default function BodyBlock() {
    return <div className="bodyblock">
        <h1>Franky Jr Blondeel</h1>
        <h2>geek - coder - solution architect</h2>
        <h4>frankyblondeel.website</h4>
        <div className="buttonblock">
            <button className="mail-btn"><i className="fa-solid fa-envelope"></i> Mail Me</button>
            <button className="connect-btn"><i className="fa-brands fa-linkedin"></i> Connect</button>
        </div>
        <AboutText />
        <InterestText />
    </div>
}