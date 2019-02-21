import axios from "axios";

const api_url = "http://localhost:3001";

export default {
    login: (userObj) => {
        console.log(userObj)
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
    },
    uploadPhoto: (data) => {
        // const image = { image: data}
     
        return axios.post(`http://localhost:3001/upload`, {headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          }, data})
    }
}