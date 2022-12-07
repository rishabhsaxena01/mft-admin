import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getCustomerById, deleteCustomer } from '../../Services';
import Navbar from '../Navbar';
import { generatePublicUrl } from '../../urlConfig';
const DeleteCustomerPage = () => {
    const [cust, setCust] = useState({});

    const { id } = useParams("");
    const history = useHistory();

    const getData = () => {
        try {
            getCustomerById(id).then((res) => {
                setCust(res.data);
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
    },[])

    const deleteCustomerData = (e) => {
        e.preventDefault();
        deleteCustomer(id).then((res) => {
            history.push("/");
        }).catch((error) => {
            if (error.response.status === 401) history.push("/login");
        })

    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h1>Are You Sure??</h1>
                <div className="card">
                    <div className="d-flex flex-column justify-content-between card-body mb-0">
                        <h5 className="card-title">You want to delete the data of {cust.firstName + " " + cust.lastName}</h5>
                        <div className='d-flex'>
                            <button onClick={deleteCustomerData} className="mx-2 btn btn-danger">Yes</button>
                            <button onClick={goBack} className="mx-2 btn btn-primary">No</button>
                        </div>
                    </div>
                    <p className="py-0 card-body text-danger font-weight-bold"><b>You will Permanently loose the following data!!</b></p>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>FirstName:</b> {cust.firstName}</li>
                        <li className="list-group-item"><b>Lastname:</b> {cust.lastName}</li>
                        <li className="list-group-item"><b>Email:</b> {cust.email}</li>
                        <li className="list-group-item"><b>Contact:</b> {cust.contact}</li>
                        <li className="list-group-item"><b>DOB:</b> {new Date(cust.dob).toLocaleDateString('en-GB')}</li>
                        <li className="list-group-item"><b>Address:</b> {cust.address}</li>
                        <li className="list-group-item"><b>Gender:</b> {cust.gender}</li>
                        <li className="list-group-item"><b>Want Personal Training ?: </b> {cust.personalTraining ? "Yes" : "No"}</li>
                        <li className="list-group-item"><b>Package Adopt: </b> {cust.packageAdopt}</li>
                        <li className="list-group-item"><b>Program Type: </b> {cust.programType}</li>
                        <li className="list-group-item"><b>Terms & Conditions: </b> {cust.tAndC ? "Followed" : "Not Followed"}</li>
                        <li className="list-group-item"><b>Image: </b> <img  width="15%" src={generatePublicUrl(cust.image)} alt="image" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DeleteCustomerPage
