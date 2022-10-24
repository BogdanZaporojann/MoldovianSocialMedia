import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileInfo} from "./MyPost/ProfileInfo";

export const Profile = (props) => {
    return(
        <>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
        </>
    );
}
