import {MyPostContainer} from "./MyPost/MyPostContainer";
import {ProfileInfo} from "./MyPost/ProfileInfo";
import {useState} from "react";
import {ProfileData} from "./PersonalInformation/ProfileData";
import {ProfileFormData} from "./PersonalInformation/ProfileFormData";
import {savePhoto} from "../../redux/profile-reducer";


export const Profile = ({profile,status,isOwner,updateUserStatus,updateUserPersonalInfo,savePhoto}) => {



    const [edit, setEdit] = useState(false);

    const goToEditMode = () => {
        setEdit(true)
    }

    return(



        <>



            <ProfileInfo isOwner={isOwner}
                         profile={profile}
                         status={status}
                         savePhoto={savePhoto}
                         updateUserStatus={updateUserStatus}/>

            <MyPostContainer />

            <div>
                {edit
                    ? <ProfileFormData updateUserPersonalInfo={updateUserPersonalInfo}/>
                    : <ProfileData goToEditMode={goToEditMode}/>}

            </div>
        </>
    );
}
