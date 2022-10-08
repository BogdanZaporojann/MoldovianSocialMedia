import {Post} from "./Post/Post";
import React from "react";

const ADD_POST_ACTION_CREATOR = () => {
    let ADD_POST = 'ADD-POST'
    return{
        type: ADD_POST
    }
}
const UPDATE_POST_ACTION_CREATOR = (text) => {
    let UPDATE_POST = 'UPDATE-POST'
    return {
        type: UPDATE_POST,
        text: text
    }
}

export const MyPost = (props) => {

    let posts = props.state.profilePage.profileData.map((post)=><Post text={post.text} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger
        props.dispatch(ADD_POST_ACTION_CREATOR());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(UPDATE_POST_ACTION_CREATOR(text));
    }
    return(

        <div>
            {posts}
            <div>

                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.state.profilePage.newPostText}></textarea>

                <button onClick={addPost}>ADD</button>

            </div>
        </div>
    );
}