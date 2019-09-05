import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer";


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
            },
            sidebar: {}


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
            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this._state.sidebar = sidebarReducer(this._state.sidebar, action);
            this._callSubscriber(this._state);
        }
    }
;


export default store;
window.store = store;