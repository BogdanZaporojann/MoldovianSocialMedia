import styles from "./Users.module.css";
import userPhoto from "../../assets/images/219983.png";
import React from "react";


export const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    return(
        <div>

            <div>
                {pages.map( (page)=>{
                    return <span className={props.currentPage === page && styles.selectedPage}
                                 onClick={(e) => props.onPageChanged(page)}>{page}</span>
                })}

            </div>
            {
                props.usersData.map((user) => <div key={user.id}>
                    <div>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={ () => {props.unfollow(user.id)} }>UNFOLLOW</button>
                            : <button onClick={ () => {props.follow(user.id)} }>FOLLOW</button>}
                    </div>

                    <div>Name: {user.name}</div>

                </div>)
            }
        </div>
    );
}