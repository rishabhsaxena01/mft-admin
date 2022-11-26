import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_HOST_DEV;

const addFranchise = async (franchise) => {
    return await axios.post(BACKEND_URL + "/franchise/add", franchise);
}

const getAllFranchise = async () => {
    return await axios.get(BACKEND_URL + "/franchise/getAll",);
    // return await axios.get(BACKEND_URL+"/getAll",{header:{"x-access-token":localStorage.getItem("item")}});
}

const getFranchiseById = async (id) => {
    return await axios.get(BACKEND_URL + `/franchise/${id}`);
}

const editFranchise = async (id, franchise) => {
    return await axios.put(BACKEND_URL + `/franchise/edit/${id}`, franchise);
}

const deleteFranchise = async (id) => {
    return await axios.delete(BACKEND_URL + `/franchise/delete/${id}`);
}

export { addFranchise, getAllFranchise, getFranchiseById, editFranchise, deleteFranchise } 