import styles from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";
import {MessageItem} from "./Message/Message";
import React from "react";
import {maxLengthCreator} from "../../utils/validators/validator";
import {Field, Form, Formik} from "formik";


const maxLength100 = maxLengthCreator(100);

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

            <Formik initialValues={{
                message: ''
            }} onSubmit={({message})=>{console.log(message)
                                                props.sendMessage(message)}}>
                {props => (
                    <Form>
                        <Field placeholder="message textarea" onChange={props.handleChange} name="message" type="textarea"></Field>
                        <button type="submit">send</button>
                    </Form>
                )}
            </Formik>


        </div>
    );
}

const MyDialogForm = (props) => {
    return(
        <div></div>
    );
}
