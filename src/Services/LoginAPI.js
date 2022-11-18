import axios from 'axios';

const BACKEND_URL = 'http://localhost:8000';

const register = async (user) => {
    return await axios.post(BACKEND_URL + "/registerUser", user);
}

const login = async (user) => {
    return await axios.post(BACKEND_URL + "/loginUser", user);
}

const logout = async () => {
    return await axios.post(BACKEND_URL + "/logoutUser", {});
}


export {register, login, logout}