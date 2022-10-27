import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileInfo} from "./MyPost/ProfileInfo";
import {ProfileStatus} from "./MyPost/Post/ProfileStatus";
import {updateUserStatus} from "../../redux/profile-reducer";

export const Profile = (props) => {
    return(
        <>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}/>
            <MyPostContainer />
        </>
    );
}
