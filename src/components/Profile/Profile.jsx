import {MyPost} from "./MyPost/MyPost";

export const Profile = (props) => {
    return(
        <MyPost state={props.state}
                dispatch={props.dispatch}
                addPost={props.addPost}
                updatePost={props.updatePost}/>
    );
}
