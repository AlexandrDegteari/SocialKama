import React from 'react'
import d from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";


const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={d.dialog}>
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
            <NavLink to={path} activeClassName={d.active}>{props.name}</NavLink>
        </div>

    )
};

export default DialogsItem;