import React from "react";
import p from './MyPosts.module.css'
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../FormsControls/FormsControls";
const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder={'Post Message'}
                        validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};
AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    let postsElements =
        props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);


    return (
        <div className={p.postsBlock}>
            <h3>My Posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={p.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;