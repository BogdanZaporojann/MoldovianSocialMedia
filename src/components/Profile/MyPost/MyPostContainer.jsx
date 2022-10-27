import React from "react";
import {addPost} from "../../../redux/profile-reducer";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return{
        posts : state.profilePage.profileData,
        newPostText: state.profilePage.newPostText
    }
}



export const MyPostContainer = connect(mapStateToProps, {addPost})(MyPost);