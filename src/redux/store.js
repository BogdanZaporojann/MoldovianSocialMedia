import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

const ADD_POST= 'ADD-POST'
const UPDATE_POST='UPDATE-POST';
const ADD_MESSAGE='ADD-MESSAGE';
const UPDATE_MESSAGE='UPDATE-MESSAGE';

export let store = {
    _state : {
        profilePage : {
            profileData : [
                {
                    text : 'Text 1',
                    likesCount: 1
                },
                {
                    text : 'Text 2',
                    likesCount:2
                },
                {
                    text : 'Text 3',
                    likesCount:3
                }
            ],
            newPostText : 'it-kamasutra.com'
        },
        dialogPage : {
            messageData : [
                {
                    message: 'Message 1'
                },
                {
                    message: 'Message 2'
                },
                {
                    message: 'Message 3'
                },
                {
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
        },
        sidebar: {}
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
        console.log('State was changed');
    },
    subscribe(observer){
        this._callSubscriber=observer
    },
    dispatch(action){
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogPage=dialogsReducer(this._state.dialogPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);
        this._callSubscriber();
    }
}







