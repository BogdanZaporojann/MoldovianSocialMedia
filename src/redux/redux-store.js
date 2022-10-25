import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {swapiReducer} from "./swapiReducer";
import {authReducer} from "./auth";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    swapiPage: swapiReducer,
    auth: authReducer
})

export let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store=store;