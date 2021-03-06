import React from "react";
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";


const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} `}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} `}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} `}>
                <NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={`${s.item} `}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
        </nav>

    );
};

export default Nav;