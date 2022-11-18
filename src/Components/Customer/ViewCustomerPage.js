import React, { useState, useEffect } from 'react'
import { getCustomerById, editCustomer } from '../../Services';
import { useParams } from "react-router-dom";
import { NavLink, useHistory } from 'react-router-dom';
import Navbar from '../Navbar';

const ViewCustomerPage = (props) => {

    const [cust, setCust] = useState({});
    const { id } = useParams("");
    const history = useHistory();
    const getCust = () => {
        try {
            getCustomerById(id).then((res) => {
                setCust(res.data);
            })
                .catch((error) => {
                    if (error.response.status === 401) history.push("/login");
                })
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        getCust();
    },[])



    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h1>{cust.firstName + " " + cust.lastName}</h1>
                <div className="card">
                    <div className="d-flex flex-column justify-content-between card-body mb-0">
                        <h5 className="card-title">Personal Info of {cust.firstName + " " + cust.lastName}</h5>
                        <div className="d-flex">
                            <NavLink to={`../updateCustomer/${cust._id}`} className="mx-2 btn btn-warning">Update</NavLink>
                            <NavLink to={`../deleteCustomer/${cust._id}`} className="mx-2 btn btn-danger">Delete</NavLink>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Email:</b> {cust.email}</li>
                        <li className="list-group-item"><b>Contact:</b> {cust.contact}</li>
                        <li className="list-group-item"><b>DOB:</b> {new Date(cust.dob).toLocaleDateString('en-GB')}</li>
                        <li className="list-group-item"><b>Address:</b> {cust.address}</li>
                        <li className="list-group-item"><b>Gender:</b> {cust.gender}</li>
                        <li className="list-group-item"><b>Want Personal Training ?: </b> {cust.personalTraining ? "Yes" : "No"}</li>
                        <li className="list-group-item"><b>Package Adopt: </b> {cust.packageAdopt}</li>
                        <li className="list-group-item"><b>Program Type: </b> {cust.programType}</li>
                        <li className="list-group-item"><b>Terms & Conditions: </b> {cust.tAndC ? "Followed" : "Not Followed"}</li>
                        <li className="list-group-item"><b>Image: </b> {cust.image}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ViewCustomerPage
