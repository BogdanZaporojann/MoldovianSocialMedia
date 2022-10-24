

export const ProfileInfo = (props) => {
    return(
        <>
            <img src="https://resources.premierleague.com/photos/2022/01/11/9364d63f-bfcd-4245-a9e4-cadf93518ab1/GettyImages-1348306988.jpg?width=930&height=620" alt="Mount"/>
            <div>{!props.profile ?  null  :  <img src={props.profile.photos.large} alt="photos"/>}</div>
            <div>ava + description</div>
        </>
    );
}