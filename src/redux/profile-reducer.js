import {store} from "./store";

const ADD_POST= 'ADD-POST'
const UPDATE_POST='UPDATE-POST';

let initialState = {
    profileData : [
        {
            id: 1,
            text: 'Text 1',
            likesCount: 1
        },
        {
            id: 2,
            text: 'Text 2',
            likesCount:2
        },
        {
            id: 3,
            text: 'Text 3',
            likesCount:3
        }
    ],
    newPostText : 'it-kamasutra.com'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST : {
            let newPost = {
                text: state.newPostText,
                likesCount: 1
            };
            let stateCopy = {...state};
            stateCopy.profileData = [...stateCopy.profileData];
            stateCopy.profileData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const ADD_POST_ACTION_CREATOR = () => {
    let ADD_POST = 'ADD-POST'
    return{
        type: ADD_POST
    }
}
export const UPDATE_POST_ACTION_CREATOR = (text) => {
    let UPDATE_POST = 'UPDATE-POST'
    return {
        type: UPDATE_POST,
        text: text
    }
}