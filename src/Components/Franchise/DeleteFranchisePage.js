import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getFranchiseById, deleteFranchise } from '../../Services';
import Navbar from '../Navbar';

const DeleteFranchisePage = () => {
    const [franch, setFranch] = useState({});

    const { id } = useParams("");
    const history = useHistory();

    const getData = () => {
        try {
            getFranchiseById(id).then((res) => {
                setFranch(res.data);
            })
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
    },[])

    const deleteFranchiseData = (e) => {
        e.preventDefault();
        deleteFranchise(id).then((res) => {
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
                        <h5 className="card-title">You want to delete the data of {franch.name}'s Franchise</h5>
                        <div className='d-flex'>
                            <button onClick={deleteFranchiseData} className="mx-2 btn btn-danger">Yes</button>
                            <button onClick={goBack} className="mx-2 btn btn-primary">No</button>
                        </div>
                    </div>
                    <p className="py-0 card-body text-danger font-weight-bold"><b>You will Permanently loose the following data!!</b></p>
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

export default DeleteFranchisePage
