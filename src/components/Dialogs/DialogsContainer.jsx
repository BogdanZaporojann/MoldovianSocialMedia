import React from "react";

import {ADD_MESSAGE_CREATOR} from "../../redux/dialogs-reducer";
import {UPDATE_MESSAGE_CREATOR} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../storeContext";
import {connect} from "react-redux";


// export const DialogsContainer = (props) => {
//
//     return(
//
//
//         <div>
//             <StoreContext.Consumer>
//                 {(store)=> {
//
//                     let sendMessage = () => {
//                         store.dispatch(ADD_MESSAGE_CREATOR());
//                     }
//
//                     let updateNewMessageBody = (body) => {
//                         store.dispatch(UPDATE_MESSAGE_CREATOR(body))
//                     }
//
//                     return  (<Dialogs state={store.getState()}
//                                       sendMessage={sendMessage}
//                                       updateNewMessageBody={updateNewMessageBody}/>)
//                 }
//                 }
//             </StoreContext.Consumer>
//         </div>
//     );
// }


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