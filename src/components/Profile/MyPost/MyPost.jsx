import {Post} from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10);


export const MyPost = (props) => {

    let posts = props.posts.map((post)=><Post key={post.id} text={post.text} likesCount={post.likesCount}/>)

    const onAddPost = (values) => {
        debugger
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
            <Field component={Textarea}
                   name="newPostText"
                   placeholder="Daradi daradi da tam tam Ararat TV cu Joric Cuartanov"
                   validate={[required, maxLength10]}/>
            <div>
                <button>SEND</button>
            </div>
        </form>
    );
}

const MyPostFormRedux = reduxForm({
    form: 'profileAddPostForm'
})(MyPostForm)