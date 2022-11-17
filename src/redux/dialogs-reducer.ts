const ADD_MESSAGE='ADD_MESSAGE';

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

let initialState = {

    messageData : [
        {id: 1, message: 'Message 1'},
        {id: 2, message: 'Message 2'},
        {id: 3, message: 'Message 3'},
        {id: 4, message: 'Message 4'}
    ] as Array<MessageType>,

    dialogData : [
        {id: 1, name: 'Dialog 1'},
        {id: 2, name: 'Dialog 2'},
        {id: 3, name: 'Dialog 3'},
        {id: 4, name: 'Dialog 4'}
    ] as Array<DialogType>,
}

export type InitialStateType = typeof initialState;



export const dialogsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type){
        case ADD_MESSAGE : {
            return {
                ...state,
                messageData: [...state.messageData, ({id: 4,message: action.newMessageBody})]
            }
        }
        default:
            return state;
    }


}







export type SendMessageActionType = {
    type: typeof ADD_MESSAGE,
    newMessageBody: string
}

export const sendMessage = (newMessageBody: string) : SendMessageActionType => ({
    type: ADD_MESSAGE,
    newMessageBody
})

