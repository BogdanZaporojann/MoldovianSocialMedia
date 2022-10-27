import ava from '../../../assets/images/219983.png'
import {ProfileStatus} from "./Post/ProfileStatus";

export const ProfileInfo = (props) => {
    return(
        <>
            <img src="https://resources.premierleague.com/photos/2022/01/11/9364d63f-bfcd-4245-a9e4-cadf93518ab1/GettyImages-1348306988.jpg?width=930&height=620" alt="Mount"/>
            <div>{!props.profile ? <img src={ava} alt="MyLittleAva"/>  :  <img src={props.profile.photos.large} alt="photos"/>}</div>
            <ProfileStatus status={props.status}
                           updateUserStatus={props.updateUserStatus}/>
        </>
    );


}