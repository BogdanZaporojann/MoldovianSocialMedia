import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileInfo} from "./MyPost/ProfileInfo";
import {ProfileStatus} from "./MyPost/Post/ProfileStatus";

export const Profile = (props) => {
    return(
        <>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer />
            <ProfileStatus status={'Hello My friends !'}/>
        </>
    );
}
