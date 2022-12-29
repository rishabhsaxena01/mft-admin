import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_HOST_DEV || "http://localhost:8000";

const addContact = async (contact) => {
    return await axios.post(BACKEND_URL + "/contact/add", contact);
}

const getAllContact = async () => {
    return await axios.get(BACKEND_URL + "/contact/getAll",);
    // return await axios.get(BACKEND_URL+"/getAll",{header:{"x-access-token":localStorage.getItem("item")}});
}

const deleteContact = async (id) => {
    return await axios.delete(BACKEND_URL + `/contact/delete/${id}`);
}

export { addContact, getAllContact, deleteContact } 