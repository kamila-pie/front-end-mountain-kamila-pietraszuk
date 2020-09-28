import React from "react";
import logo from "../assets/mountain_logo_v1.png"

const Nav = () => {
    return (
        <header>
            <nav>
                <ul className={'navList'}>
                    <li className={'navEl text-shadow-pop-top'}>ABOUT</li>
                    <li className={'navEl text-shadow-pop-top'}>OFFER</li>
                    <img className={'navLogo'} src={logo} alt={'shirt'}/>
                    <li className={'navEl text-shadow-pop-top'}>GALLERY</li>
                    <li className={'navEl text-shadow-pop-top'}>CONTACT</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;