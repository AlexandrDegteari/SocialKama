import React from "react";
import h from './Header.module.css'
import logo from './../../assets/img/logo2.png'

const Header = () => {
    return (
        <header className={h.header}>
            <img src={logo} alt={'social'}/>
        </header>

    );
};

export default Header;