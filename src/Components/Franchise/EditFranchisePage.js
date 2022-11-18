import React, { useState, useEffect } from 'react';
import { useHistory, useParams, } from "react-router-dom";
import { getFranchiseById, editFranchise } from '../../Services';
import Navbar from '../Navbar';

const EditFranchisePage = () => {

    const [preValue, setPrevFunc] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        state: "",
        companyName: "",
        companyWebsite: "",
        turnOver: 0,
        amountForInvestment: 0
    })
    const [error, setError] = useState("");
    const history = useHistory();

    const { id } = useParams('');

    const getPrevDetails = () => {
        getFranchiseById(id)
            .then((res) => {
                console.log(res.data)
                setPrevFunc({
                    ...res.data,
                    dob: new Date(res.data.dob).toLocaleDateString('en-GB')
                });
            })
            .catch((error) => {
                if (error.response.status === 401) history.push("/login");
                console.log(error.response.data);
            })
    }

    const setData = (e) => {
        const { name, value } = e.target;
        setPrevFunc((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    useEffect(() => {
        getPrevDetails();
    }, [])

    const update = (e) => {
        e.preventDefault();
        editFranchise(id, preValue)
            .then((res) => {
                setError("");
                history.goBack();
            })
            .catch((error) => {
                if (error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message)
                }
                // if (error.response.status === 403) alert(error.response.data);
            })
    }

    return (
        <>
            <Navbar />
            <div className='container mt-4'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={setData} value={preValue.name} type="text" className="form-control" name="name" id="name" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input onChange={setData} value={preValue.phone} type="text" className="form-control" name="phone" id="phone" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={setData} value={preValue.email} type="email" className="form-control" name="email" id="email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input onChange={setData} value={preValue.city} type="text" className="form-control" name="city" id="city" />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="state" className="form-label">State</label>
                        <input onChange={setData} value={preValue.state} type="text" className="form-control" name="state" id="state" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="companyName" className="form-label">Company Name</label>
                        <input onChange={setData} value={preValue.companyName} type="text" className="form-control" name="companyName" id="companyName" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="companyWebsite" className="form-label">Company Website</label>
                        <input onChange={setData} value={preValue.companyWebsite} type="text" className="form-control" name="companyWebsite" id="companyWebsite" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="turnOver" className="form-label">Turn Over</label>
                        <input onChange={setData} value={preValue.turnOver} type="number" className="form-control" name="turnOver" id="turnOver" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="amountForInvestment" className="form-label">Amount for Investment</label>
                        <input onChange={setData} value={preValue.amountForInvestment} type="number" className="form-control" name="amountForInvestment" id="amountForInvestment" />
                    </div>

                    {error &&
                        <div className="mb-3 bg-danger">
                            <p className='text-white text-center'>{error}</p>
                        </div>
                    }

                    <button onClick={update} type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditFranchisePage
