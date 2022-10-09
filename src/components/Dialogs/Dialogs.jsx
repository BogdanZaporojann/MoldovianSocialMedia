import style from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";
import {MessageItem} from "./Message/Message";
import React from "react";



export const Dialogs = (props) => {


    let dialogs = props.state.dialogPage.dialogData.map((dialog)=> <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)

    let messages = props.state.dialogPage.messageData.map((message)=><MessageItem key={message.id} message={message.message}/>)


    let newMessageElement = React.createRef();


    let newMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = () => {
        let body = newMessageElement.current.value;
        props.updateNewMessageBody(body)
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
