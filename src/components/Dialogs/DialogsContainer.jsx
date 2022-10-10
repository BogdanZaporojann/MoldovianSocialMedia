import React from "react";

import {ADD_MESSAGE_CREATOR, UPDATE_MESSAGE_CREATOR} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        state: state
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body) => {
            dispatch(UPDATE_MESSAGE_CREATOR(body))
        },
        sendMessage: () => {
            dispatch(ADD_MESSAGE_CREATOR())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)