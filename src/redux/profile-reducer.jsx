import {store} from "./store";

const ADD_POST= 'ADD-POST'
const UPDATE_POST='UPDATE-POST';


export const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST :
            let newPost = {
                text: state.newPostText,
                likesCount: 1
            }
            state.profileData.push(newPost);
            state.newPostText='';
            return state;
        case UPDATE_POST:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}