import React from "react";
import h from './Header.module.css'
import logo from './../../assets/img/logo2.png'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <header className={h.header}>
            <NavLink to= '/profile'>
            <img src={logo} alt={'social'}/>
            </NavLink>
        </header>

    );
};

export default Header;