import React from 'react'
import s from './DialogItem/DialogsItem.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message} key={m.id} id={m.id}/>);
    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody)

    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>


            </div>
        </div>
    )
};
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' placeholder={'Enter your message'} component="textarea"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
const AddMessageFormRedux = reduxForm({form:"DialogAddMessageForm"})(AddMessageForm);
export default Dialogs;