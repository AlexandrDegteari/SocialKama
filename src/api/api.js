import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
    headers: {
        // "API-KEY": '089ff49d-32c5-46ec-a8bb-409dbb994b7b'
    }
});
export const profileAPI = {

    getProfile(userID) {
        return instance.get(`profile/${userID}`)
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    }
};
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });

    },
    follow(userID) {
        return instance.post(`follow/${userID}`)
    },
    unFollow(userID) {
        return instance.delete(`follow/${userID}`)

    },
    getProfile(userID) {
        console.warn('please use ProfileAPI');

        return profileAPI.getProfile(userID)

    },
};
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password) {
        return instance.post(`Users/login`, {email, password})
    },
    logout(){
        return instance.post
        // (`Users/logout?access_token=${}}`)
    }
};
