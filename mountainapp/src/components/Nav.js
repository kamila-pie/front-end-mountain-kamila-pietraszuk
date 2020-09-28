import React from "react";
import logo from "../assets/mountain_logo_v1.png"

const Nav = () => {
    return (
        <header>
            <nav>
                <ul className={'navList'}>
                    <li className={'navEl'}>ABOUT</li>
                    <li className={'navEl'}>OFFER</li>
                    <img className={'navLogo'} src={logo} alt={'shirt'}/>
                    <li className={'navEl'}>GALLERY</li>
                    <li className={'navEl'}>CONTACT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;