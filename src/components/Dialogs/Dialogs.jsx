import styles from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";
import {MessageItem} from "./Message/Message";
import React from "react";
import {Field, reduxForm} from "redux-form";


export const Dialogs = (props) => {


    let dialogs = props.state.dialogPage.dialogData.map((dialog)=> <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)

    let messages = props.state.dialogPage.messageData.map((message)=><MessageItem key={message.id} message={message.message}/>)



    let onAddMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }


    return(




        <div className={styles.dialogs}>

            <div className={styles.dialogsItem}>
                {dialogs}
            </div>

            <div className={styles.messagesItem}>
                {messages}
            </div>

            <MyDialogFormRedux onSubmit={onAddMessage}/>
        </div>
    );
}

const MyDialogForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea"
                   name="newMessageBody"
                   placeholder="Daradi daradi da tam tam Ararat TV cu Joric Cuartanov"/>
            <div>
                <button>SEND</button>
            </div>
        </form>
    );
}

const MyDialogFormRedux = reduxForm({
    form: "dialogForm"
})(MyDialogForm)