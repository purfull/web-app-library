import { useState } from "react";
import "./navBar.css"
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    return (
        <div className="nav-main">
            <div className="child-nav">
                <h2>Logo</h2>
                <h2 className="fees-text">Fees</h2>
                <div className="hamburger-icon" onClick={() => {
                    setIsopen(!Isopen)
                    setIsopen(false)
                }}><RxHamburgerMenu /></div>



            </div>


        </div>
    );
}

export default NavBar;