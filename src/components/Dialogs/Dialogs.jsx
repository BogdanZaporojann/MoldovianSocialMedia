import style from './Dialogs.module.css'
import {DialogItem} from "./Dialog/Dialog";
import {MessageItem} from "./Message/Message";
import React from "react";



const ADD_MESSAGE_CREATOR = () => ({
    type: 'ADD-MESSAGE'
})


const UPDATE_MESSAGE_CREATOR = (body) => ({
    type: 'UPDATE-MESSAGE',
    body: body
})


export const Dialogs = (props) => {


    let dialogs = props.state.dialogPage.dialogData.map((dialog)=> <DialogItem id={dialog.id} name={dialog.name}/>)

    let messages = props.state.dialogPage.messageData.map((message)=><MessageItem message={message.message}/>)


    let newMessageElement = React.createRef();


    let newMessage = () => {
        debugger
        let text = newMessageElement.current.value;
        props.dispatch(ADD_MESSAGE_CREATOR());
    }

    let onMessageChange = () => {
        let body = newMessageElement.current.value;
        props.dispatch(UPDATE_MESSAGE_CREATOR(body))
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
