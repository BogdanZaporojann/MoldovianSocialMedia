import {Post} from "./Post/Post";
import React from "react";

export const MyPost = (props) => {

    let posts = props.posts.map((post)=><Post key={post.id} text={post.text} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
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