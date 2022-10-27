import {Post} from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";

export const MyPost = (props) => {

    let posts = props.posts.map((post)=><Post key={post.id} text={post.text} likesCount={post.likesCount}/>)

    const onAddPost = (values) => {
        console.log(values);
        props.addPost(values.newPostText);
    }

    return(

        <div>
            {posts}
            <div>
                <MyPostFormRedux onSubmit={onAddPost}/>
            </div>
        </div>

    );
}

const MyPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newPostText"  placeholder="Daradi daradi da tam tam Ararat TV cu Joric Cuartanov" />
            <div>
                <button>SEND</button>
            </div>
        </form>
    );
}

const MyPostFormRedux = reduxForm({
    form: 'profileAddPostForm'
})(MyPostForm)