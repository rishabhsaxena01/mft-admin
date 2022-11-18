import React, { useState, useEffect } from 'react'
import { getFranchiseById } from '../../Services';
import { useParams } from "react-router-dom";
import { NavLink, useHistory } from 'react-router-dom';
import Navbar from '../Navbar';

const ViewFranchisePage = (props) => {

    const [franch, setFranch] = useState({});
    const { id } = useParams("");
    const history = useHistory();
    const getFranch = () => {
        try {
            getFranchiseById(id).then((res) => {
                setFranch(res.data);
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
        getFranch();
    },[])



    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <h1>{franch.name}</h1>
                <div className="card">
                    <div className="d-flex flex-column justify-content-between card-body mb-0">
                        <h5 className="card-title">Information of {franch.name}'s Franchise</h5>
                        <div className="d-flex">
                            <NavLink to={`../updateFranchise/${franch._id}`} className="mx-2 btn btn-warning">Update</NavLink>
                            <NavLink to={`../deleteFranchise/${franch._id}`} className="mx-2 btn btn-danger">Delete</NavLink>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Phone: </b> {franch.phone}</li>
                        <li className="list-group-item"><b>Email: </b> {franch.email}</li>
                        <li className="list-group-item"><b>City: </b> {franch.city}</li>
                        <li className="list-group-item"><b>State: </b> {franch.state}</li>
                        <li className="list-group-item"><b>Company Name: </b> {franch.companyName}</li>
                        <li className="list-group-item"><b>Company Website: </b> {franch.companyWebsite ? franch.companyWebsite : 'Not Available' }</li>
                        <li className="list-group-item"><b>Turn Over: </b> {franch.turnOver ? franch.turnOver : "Not Available"}</li>
                        <li className="list-group-item"><b>Amount for Investment: </b> {franch.amountForInvestment ? franch.amountForInvestment : "Not Available"}</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ViewFranchisePage
