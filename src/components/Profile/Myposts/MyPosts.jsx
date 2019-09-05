import React from "react";
import p from './MyPosts.module.css'
import Post from "./post/Post";


const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let postsElement =
        props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)


    };
    return (
        <div className={p.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElement}

            </div>

        </div>

    );
};

export default MyPosts;