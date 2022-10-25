import styles from "./Users.module.css";
import userPhoto from "../../assets/images/219983.png";
import React from "react";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";


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
                        <NavLink to={"profile/"+user.id}>
                            <img className={styles.images} src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed

                            ? <button disabled={props.followingInProgress.some(id => id===user.id)} onClick={ () => {
                                props.onUnfollow(user.id);
                            }}>UNFOLLOW</button>


                            : <button disabled={props.followingInProgress.some(id => id===user.id)} onClick={ () => {
                                props.onFollow(user.id);
                            }}>FOLLOW</button>}
                    </div>

                    <div>Name: {user.name}</div>

                </div>)
            }
        </div>
    );
}