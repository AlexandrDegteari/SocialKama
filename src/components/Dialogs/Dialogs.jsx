import React from 'react'
import s from './DialogItem/DialogsItem.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

let maxLength100 = maxLengthCreator(100);
const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message} key={m.id} id={m.id}/>);
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)

    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>


            </div>
        </div>
    )
};
let AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody' placeholder={'Enter your message'} component={Textarea}
                       validate={[required, maxLength100]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
};
AddMessageForm = reduxForm({form: "DialogAddMessageForm"})(AddMessageForm);

export default Dialogs;