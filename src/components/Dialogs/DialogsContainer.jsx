import React from "react";

import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";



let mapStateToProps = (state) => ({
        state: state,
})


let AuthDialogsContainer = withAuthRedirect(Dialogs)


export const DialogsContainer = connect(mapStateToProps,{sendMessage, updateNewMessageBody})(AuthDialogsContainer)