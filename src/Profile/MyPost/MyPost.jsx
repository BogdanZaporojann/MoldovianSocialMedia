import {Post} from "./Post/Post";
import React from "react";


export const MyPost = (props) => {

    let posts = props.state.profilePage.profileData.map((post)=><Post text={post.text} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {

        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement='';
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
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