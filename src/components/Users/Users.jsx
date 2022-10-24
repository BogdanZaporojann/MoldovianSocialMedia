import styles from "./Users.module.css";
import userPhoto from "../../assets/images/219983.png";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";


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

                            ? <button onClick={ () => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/`+user.id,{
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '5d793c99-cbef-4f7e-8001-c502c1ec99a5'
                                    }
                                    }).then(result => {
                                        if(result.data.resultCode==0){
                                            props.unfollow(user.id)
                                        }
                                });
                            }}>UNFOLLOW</button>


                            : <button onClick={ () => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/`+user.id,{},{
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '5d793c99-cbef-4f7e-8001-c502c1ec99a5'
                                    }
                                }).then(result => {
                                    if(result.data.resultCode==0){
                                        props.follow(user.id)
                                    }
                                });
                            }}>FOLLOW</button>}
                    </div>

                    <div>Name: {user.name}</div>

                </div>)
            }
        </div>
    );
}