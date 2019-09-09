import React from 'react'
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p);
                    }}
                                 className={props.currentPage === p && styles.selectedPage}>{p}</span>
                }
            )}
        </div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img alt={'Naghiev'} src={u.photos.small != null ? u.photos.small :
                        "http://ib.tsu.ru/wp-content/uploads/2017/10/no-ava-300x300.png"}
                         className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ? <button disabled={props.followingInProgress} onClick={() => {
                            props.toggleFollowingProgress(true);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": '089ff49d-32c5-46ec-a8bb-409dbb994b7b'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false)
                                });
                        }
                        }>UnFollow</button>
                        : <button disabled={props.followingInProgress} onClick={() => {
                            props.toggleFollowingProgress(true);
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": '089ff49d-32c5-46ec-a8bb-409dbb994b7b'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id);
                                    }
                                    props.toggleFollowingProgress(false)
                                });

                        }}>Follow</button>}
                </div>
                        </span>
                    <span>
                        <span>
                        <div>
                        {u.name}
                        </div>
                        <div>
                        {u.status}
                        </div>
                        </span>
                        <span>
                        <div>
                        {/*{u.location.country}*/}
                        </div>
                        <div>
                        {/*{u.location.city}*/}
                        </div>
                        </span>
                        </span>
                </div>
            )}
    </div>
};
export default Users;