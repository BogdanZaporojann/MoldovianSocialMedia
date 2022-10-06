import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {state} from "./state";
import {addPost} from "./state";
import {addMessage} from "./state";
import {subsribe} from "./state";
import {updatePost} from "./state";
import {updateMessage} from "./state";


const rerenderEntireTree = () => {


    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updatePost={updatePost}
                     addMessage={addMessage}
                     updateMessage={updateMessage}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

rerenderEntireTree();

subsribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
