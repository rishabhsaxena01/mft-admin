import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_HOST_DEV || "http://localhost:8000";

const addSubscription = async (subscription) => {
    return await axios.post(BACKEND_URL + "/subscription/add", subscription);
}

const getAllSubscription = async () => {
    return await axios.get(BACKEND_URL + "/subscription/getAll",);
    // return await axios.get(BACKEND_URL+"/getAll",{header:{"x-access-token":localStorage.getItem("item")}});
}

const deleteSubscription = async (id) => {
    return await axios.delete(BACKEND_URL + `/subscription/delete/${id}`);
}

export { addSubscription, getAllSubscription, deleteSubscription } 