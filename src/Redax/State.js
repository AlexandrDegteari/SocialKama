const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let store = {
    _state: {
        profilePage: {

            posts: [
                {message: 'its my first post', id: 1, likesCount: 23},
                {message: 'Hi, how are you', id: 2, likesCount: 3},
            ],
            newPostText: "Enter your message"

        },
        dialogsPage: {
            dialogs: [
                {name: 'Maik', id: 1},
                {name: 'Pavel', id: 2},
                {name: 'Vladimir', id: 3},
                {name: 'Vadim', id: 4},
                {name: 'Maik', id: 5},
                {name: 'Mihai', id: 6}
            ],
            messages: [
                {message: 'Hello', id: 1},
                {message: 'How are u', id: 2},
                {message: 'What are u doing?', id: 3},
                {message: 'Where are you?', id: 4},
                {message: 'What is your favorite color?', id: 5},
                {message: 'What do you like to eat?', id: 6}
            ],
            newMessageBody: ""


        }


    },
    _callSubscriber() {
        console.log("state changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({message: body, id: 7});
            this._callSubscriber(this._state);
        }
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});
export default store;
window.store = store;