import React from 'react'
import s from './DialogItem/DialogsItem.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redax/State";


const Dialogs = (props) => {

    let state =props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange = (e) => {
      let body =  e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body))
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div> <textarea value={newMessageBody}
                                    placeholder={'Enter your message'}
                                    onChange={onNewMessageChange}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>


            </div>
        </div>
    )


};

export default Dialogs;