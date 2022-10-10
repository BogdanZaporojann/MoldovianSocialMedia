import React from "react";
import {ADD_POST_ACTION_CREATOR, UPDATE_POST_ACTION_CREATOR} from "../../../redux/profile-reducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        posts : state.profilePage.profileData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            dispatch(UPDATE_POST_ACTION_CREATOR(text));
        },
        addPost: () => {
            dispatch(ADD_POST_ACTION_CREATOR());
        }
    }
}

export const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);