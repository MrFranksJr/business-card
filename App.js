import React from "react"

import ProfilePic from "./components/profilePic.js"
import BodyBlock from "./components/BodyBlock.js"
import Footer from "./components/Footer.js"

export default function App() {
    return <div className="rootbox">
            <ProfilePic />
            <BodyBlock />
            <Footer />
        </div>
}