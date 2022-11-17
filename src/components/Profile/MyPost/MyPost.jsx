import {Post} from "./Post/Post";
import React from "react";
import {Field, Form, Formik} from "formik";




export const MyPost = (props) => {

    let posts = props.posts.map((post)=><Post key={post.id} text={post.text} likesCount={post.likesCount}/>)


    return(

        <div>
            {posts}
            <Formik initialValues={{
                post: ''
            }} onSubmit={({post})=>{console.log(post)
                                    props.addPost(post)}}>
                {props=>(
                    <Form>
                        <Field placeholder="post textarea" name="post" type="textarea"/>
                        <div>
                            <button type="submit">send</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>

    );
}
