import React from 'react'
import d from '../Message/Message.module.css'


const Messages = (props) => {

    return (
        <div>
            <div className={d.message}>{props.message}</div>
        </div>
    )
};


export default Messages;