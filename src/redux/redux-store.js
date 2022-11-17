import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {swapiReducer} from "./swapiReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    swapiPage: swapiReducer,
    auth: authReducer,
    app : appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store=store;