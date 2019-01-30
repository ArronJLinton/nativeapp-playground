import axios from "axios";

const api_url = "https://uw-playground-api.herokuapp.com/auth/login";

export default {
    login: (userObj) => {
        return axios.post(`${api_url}/auth/login`, userObj)
    },
    logout: () => {
        return axios.post(`${api_url}/auth/logout`)
    },
    getUser: () => {
        return axios.get(`${api_url}/auth/user`)
    },
    registerUser: (userObj) => {
        return axios.post(`${api_url}/auth/signup`, userObj)
    },
    saveBook: (bookObj, userId) => {
        return axios.post(`${api_url}/api/book/` + userId, bookObj)
    },
    getUserBooks: (userId) => {
        return axios.get(`${api_url}/api/book/` + userId)
    }
}