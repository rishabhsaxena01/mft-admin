import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_HOST_DEV || "http://localhost:8000";

const register = async (user) => {
    return await axios.post(BACKEND_URL + "/registerUser", user);
}

const login = async (user) => {
    console.log(BACKEND_URL);
    return await axios.post(BACKEND_URL + "/loginUser", user);
}

const logout = async () => {
    return await axios.post(BACKEND_URL + "/logoutUser", {});
}

const changePassword = async (user) => {
    return await axios.put(BACKEND_URL + "/changePassword", user);
}


export {register, login, logout, changePassword}