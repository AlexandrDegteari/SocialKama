import React from 'react'
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";


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
                            props.unFollow(u.id);
                        }
                        }>UnFollow</button>
                        : <button disabled={props.followingInProgress} onClick={() => {
                            props.follow(u.id);

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