const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_MESSAGE='UPDATE-MESSAGE';

export const dialogsReducer = (state, action) => {

    switch (action.type){
        case ADD_MESSAGE :
            let newMessage = {
                message : state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText='';
            return state
        case UPDATE_MESSAGE :
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }


}