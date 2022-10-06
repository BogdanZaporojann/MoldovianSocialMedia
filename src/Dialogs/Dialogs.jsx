import style from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";
import {MessageItem} from "./Message/Message";
import React from "react";
import {addMessage} from "../state";


export const Dialogs = (props) => {


    let dialogs = props.state.dialogPage.dialogData.map((dialog)=> <DialogItem id={dialog.id} name={dialog.name}/>)

    let messages = props.state.dialogPage.messageData.map((message)=><MessageItem message={message.message}/>)


    let newMessageElement = React.createRef();


    let newMessage = () => {
        let text = newMessageElement.current.value;
        addMessage(text);
    }

    let onMessageChange = () => {
        let text = newMessageElement
        props.updateMessage(text)
    }

    return(



        <div className={style.dialogs}>

            <div className={style.dialogsItem}>
                {dialogs}
            </div>

            <div>

                {messages}

                <div>
                    <textarea onChange={onMessageChange}
                              ref={newMessageElement}
                              value={props.state.dialogPage.newMessageText}></textarea>

                    <button onClick={newMessage}>ADD</button>
                </div>

            </div>



        </div>
    );
}
