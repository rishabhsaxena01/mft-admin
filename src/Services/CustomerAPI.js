import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_HOST_DEV;

const addCustomer = async (customer) => {
    return await axios.post(BACKEND_URL + "/customer/add", customer);
}

const getAllCustomer = async () => {
    return await axios.get(BACKEND_URL + "/customer/getAll",);
    // return await axios.get(BACKEND_URL+"/getAll",{header:{"x-access-token":localStorage.getItem("item")}});
}

const getCustomerById = async (id) => {
    return await axios.get(BACKEND_URL + `/customer/${id}`);
}

const editCustomer = async (id, customer) => {
    return await axios.put(BACKEND_URL + `/customer/edit/${id}`, customer);
}

const deleteCustomer = async (id) => {
    return await axios.delete(BACKEND_URL + `/customer/delete/${id}`);
}

export { addCustomer, getAllCustomer, getCustomerById, editCustomer, deleteCustomer } 