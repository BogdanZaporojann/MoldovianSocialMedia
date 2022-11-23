import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {appReducer} from "./app-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app : appReducer
})

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends {[key:string]: infer U} ? U : never
export type InferActionsType<T extends {[key: string]: (...args: any[])=>any}> = ReturnType<PropertiesType<T>>











// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


// @ts-ignore
window.store=store;