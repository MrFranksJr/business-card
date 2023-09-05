import React from "react"
import InterestText from "./InterestText"
import AboutText from "./AboutText"

function ClickButton({ message, children }) {
    if (message === 'MailMe') {
        return (
            <button className="mail-btn" onClick={() => window.open('mailto:frankyjr@me.com')}>{children}</button>
        )
    } 
    else if (message === 'LinkedIn') {
        return (
            <button className="connect-btn" onClick={() => window.open('https://www.linkedin.com/in/frankyjr/','_blank')}>{children}</button>
        )
    }
}

export default function BodyBlock() {
    return <div className="bodyblock">
        <h1>Franky Jr Blondeel</h1>
        <h2>geek - coder - solution architect</h2>
        <h4>frankyblondeel.website</h4>
        <div className="buttonblock">
            <ClickButton message="MailMe">
                <i className="fa-solid fa-envelope"></i> Mail Me
            </ClickButton>
            <ClickButton message="LinkedIn">
                <i className="fa-brands fa-linkedin"></i> Connect
            </ClickButton>
        </div>
        <AboutText />
        <InterestText />
    </div>
}