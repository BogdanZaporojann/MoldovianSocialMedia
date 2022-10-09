import React from "react";
import {ADD_POST_ACTION_CREATOR, UPDATE_POST_ACTION_CREATOR} from "../../../redux/profile-reducer";
import {StoreContext} from "../../../storeContext";
import {MyPost} from "./MyPost";
import {connect} from "react-redux";

// export const MyPostContainer = (props) => {
//
//     return(
//
//         <div>
//             <StoreContext.Consumer>
//                 {
//                     (store) =>{
//                         let addPost = () => {
//                             store.dispatch(ADD_POST_ACTION_CREATOR());
//                         }
//
//                         let onPostChange = (text) => {
//                             debugger
//                             store.dispatch(UPDATE_POST_ACTION_CREATOR(text));
//                         }
//                         return (<MyPost state={store.getState()} posts={store.getState().profilePage.profileData}
//                                         newPostText={store.getState().profilePage.newPostText}
//                                         addPost={addPost}
//                                         updateNewPostText={onPostChange}/>)
//                     }
//                 }
//             </StoreContext.Consumer>
//         </div>
//     );
// }

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