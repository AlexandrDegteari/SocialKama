import React from "react";
import h from './Header.module.css'


const Header = () => {
    return (
        <header className={h.header}>
            <img src="../../assets/img/logo.png" alt={'social'}/>
        </header>

    );
};

export default Header;