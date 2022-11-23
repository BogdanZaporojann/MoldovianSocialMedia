import ava from '../../../assets/images/219983.png'
import {ProfileStatus} from "./Post/ProfileStatus";
import {ProfileStatusWithHooks} from "./Post/ProfileStatusWithHooks";

export const ProfileInfo = ({profile,status,isOwner,updateUserStatus,savePhoto}) => {

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return(
        <>
            <div>{!profile ? <img src={ava} alt="MyLittleAva"/>  :  <img src={profile.photos.large} alt="photos"/>}</div>
            {isOwner && <input onChange={onMainPhotoSelected} type="file"/>}

            <ProfileStatusWithHooks status={status}
                           updateUserStatus={updateUserStatus}/>
        </>
    );


}