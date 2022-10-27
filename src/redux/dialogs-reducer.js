const ADD_MESSAGE='ADD-MESSAGE';


let initialState = {
    messageData : [
        {
            id: 1,
            message: 'Message 1'
        },
        {
            id: 2,
            message: 'Message 2'
        },
        {
            id: 3,
            message: 'Message 3'
        },
        {
            id: 4,
            message: 'Message 4'
        }

    ],
    dialogData : [
        {
            id: 1,
            name: 'Dialog 1'
        },
        {
            id: 2,
            name: 'Dialog 2'
        },
        {
            id: 3,
            name: 'Dialog 3'
        },
        {
            id: 4,
            name: 'Dialog 4'
        }

    ],
}

export const dialogsReducer = (state = initialState, action) => {




    switch (action.type){
        case ADD_MESSAGE : {
            return {
                ...state,
                messageData: [...state.messageData, ({message: action.newMessageBody})]
            }
        }
        default:
            return state;
    }


}


export const sendMessage = (newMessageBody) => ({
    type: 'ADD-MESSAGE',
    newMessageBody
})
