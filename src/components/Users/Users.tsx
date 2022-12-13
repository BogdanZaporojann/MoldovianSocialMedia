// @ts-ignore
import styles from "./Users.module.css";
// @ts-ignore
import userPhoto from "../../assets/images/219983.png";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import {UserType} from "../../types/types";


type PropsType = {
    currentPage: number
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    usersData: Array<UserType>
    followingInProgress: Array<number>
    onFollow: (userId: number) => void
    onUnfollow: (userId: number) => void

}

export const Users: React.FC<PropsType> = ({currentPage, totalUsersCount, pageSize, onPageChanged, usersData,
                                               followingInProgress,onFollow,onUnfollow,...props}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    return(
        <div>

            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged}/>
            {
                usersData.map((user) => <div key={user.id}>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                            <img className={styles.images} src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed

                            ? <button disabled={followingInProgress.some(id => id===user.id)} onClick={ () => {
                                onUnfollow(user.id);
                            }}>UNFOLLOW</button>


                            : <button disabled={followingInProgress.some(id => id===user.id)} onClick={ () => {
                                onFollow(user.id);
                            }}>FOLLOW</button>}
                    </div>

                    <div>Name: {user.name}</div>

                </div>)
            }
        </div>
    );
}