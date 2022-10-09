import {Post} from "./Post/Post";
import React from "react";
import {ADD_POST_ACTION_CREATOR} from "../../../redux/profile-reducer";
import {UPDATE_POST_ACTION_CREATOR} from "../../../redux/profile-reducer";

export const MyPost = (props) => {

    let posts = props.posts.map((post)=><Post key={post.id} text={post.text} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
        // props.dispatch(ADD_POST_ACTION_CREATOR())
    };

    let onPostChange = () => {
        debugger
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
        // props.dispatch(UPDATE_POST_ACTION_CREATOR(text))
    }

    window.props=props
    return(

        <div>
            {posts}
            <div>

                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}></textarea>

                <button onClick={addPost}>ADD</button>

            </div>
        </div>
    );
}