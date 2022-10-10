const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_MESSAGE='UPDATE-MESSAGE';


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
    newMessageText : 'it-kamasutra.com'
}

export const dialogsReducer = (state = initialState, action) => {


    let stateCopy = {
        ...state,
        messageData: [...state.messageData]
    }

    switch (action.type){
        case ADD_MESSAGE : {
            let newMessage = {
                message: state.newMessageText
            }
            stateCopy.messageData.push(newMessage)
            stateCopy.newMessageText = '';
            return stateCopy
        }
        case UPDATE_MESSAGE : {
            stateCopy.newMessageText = action.body;
            return stateCopy;
        }
        default:
            return state;
    }


}


export const ADD_MESSAGE_CREATOR = () => ({
    type: 'ADD-MESSAGE'
})


export const UPDATE_MESSAGE_CREATOR = (body) => ({
    type: 'UPDATE-MESSAGE',
    body: body
})