import React from 'react'
import s from './DialogItem/DialogsItem.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Messages from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redax/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state =props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };
    let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body))
    };


    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage = {onSendMessageClick} dialogsPage = {state}/>



};

export default DialogsContainer;