import React from "react";
import userPhoto from "../../assets/images/219983.png";
import axios from "axios";

export class UsersC extends React.Component{



    // getUser = () => {
    //
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //         .then(result => {
    //             this.props.setUsers(result.data.items);
    //         })
    // }

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(result => {
                this.props.setUsers(result.data.items);
            })
    }

    render(){
        debugger
        return(
            <div>
                {
                    this.props.usersData.map((user) => <div key={user.id}>
                        <div>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={ () => {this.props.unfollow(user.id)} }>UNFOLLOW</button>
                                : <button onClick={ () => {this.props.follow(user.id)} }>FOLLOW</button>}
                        </div>

                        <div>Name: {user.name}</div>

                    </div>)
                }
                <div>
                    <button onClick={this.getUser}>
                        Show More
                    </button>
                </div>
            </div>
        );
    }
}