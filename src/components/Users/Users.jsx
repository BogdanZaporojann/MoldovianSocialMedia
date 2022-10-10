import axios from "axios";
import userPhoto from '../../assets/images/219983.png'

export const Users = (props) => {




    let getUsers = () => {

        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return ( <div>
        {
            props.usersData.map((user) => <div key={user.id}>
                <div>
                    <img src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={ () => {props.unfollow(user.id)} }>UNFOLLOW</button>
                        : <button onClick={ () => {props.follow(user.id)} }>FOLLOW</button>}
                </div>

                <div>Name: {user.name}</div>

            </div>)
        }
        <div>
            <button onClick={getUsers}>
                Show More
            </button>
        </div>
        </div>);
}