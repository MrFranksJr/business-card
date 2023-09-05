import React from "react"

export default function Footer() {
    return <footer>
            <button className="social-btn" onClick={() => window.open('https://github.com/MrFranksJr','_blank')}><img className="social-icon" src='../assets/images/ghub.svg' alt='github icon' /></button>
            <button className="social-btn" onClick={() => window.open('https://www.linkedin.com/in/frankyjr/','_blank')}><img className="social-icon" src='../assets/images/linkedin.svg' alt='linkedin icon' /></button>
            <button className="social-btn" onClick={() => window.open('https://www.instagram.com/frankyjr/','_blank')}><img className="social-icon" src='../assets/images/instagram.svg' alt='insta icon' /></button>
            <button className="social-btn" onClick={() => window.open('https://twitter.com/mrfranks69','_blank')}><img className="social-icon" src='../assets/images/twitter.svg' alt='twitter icon' /></button>
        </footer>
}