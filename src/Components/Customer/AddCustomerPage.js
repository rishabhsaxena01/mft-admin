import React, { useState } from 'react'
import { addCustomer } from '../../Services'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar'
const AddCustomerPage = () => {

    const [inputValue, setFunc] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        dob: "",
        address: "",
        gender: "",
        personalTraining: false,
        packageAdopt: "1 Months",
        programType: "Full body",
        tAndC: false,
        image: ""
    })

    const [error, setError] = useState("");
    const history = useHistory();

    const setData = (e) => {
        const { name, value } = e.target;
        setFunc((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    const register = (e) => {
        e.preventDefault();

        addCustomer(inputValue)
            .then(() => {
                setError("");
                history.push("/");
            })
            .catch((error) => {
                if (error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message)
                }
                if (error.response.status === 401) history.push("/login");
            })

    }
    const changeTAndC = (e) => {
        setFunc((preval) => {
            return {
                ...preval,
                tAndC: !inputValue.tAndC
            }
        })
    }

    return (
        <>
            <Navbar />
            <div className='container mt-4'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input onChange={setData} value={inputValue.firstName} type="text" className="form-control" name="firstName" id="firstName" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input onChange={setData} value={inputValue.lastName} type="text" className="form-control" name="lastName" id="lastName" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={setData} value={inputValue.email} type="email" className="form-control" name="email" id="email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">Contact</label>
                        <input onChange={setData} value={inputValue.contact} type="text" className="form-control" name="contact" id="contact" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input onChange={setData} value={inputValue.dob} type="date" className="form-control" name="dob" id="dob" />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input onChange={setData} value={inputValue.address} type="text" className="form-control" name="address" id="address" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <br />
                        <div className="d-flex justify-content-between">
                            <label><input type="radio" value="Male" checked={inputValue.gender === "Male"} onChange={setData} name="gender" /> Male</label>
                            <label><input type="radio" value="Female" checked={inputValue.gender === "Female"} onChange={setData} name="gender" /> Female</label>
                            <label><input type="radio" value="Other" checked={inputValue.gender === "Other"} onChange={setData} name="gender" /> Other</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="personalTraining" className="form-label">Personal Training</label>
                        <select
                            onChange={setData}
                            value={inputValue.personalTraining}
                            className="form-control"
                            name="personalTraining"
                            id="personalTraining"
                        >
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="packageAdopt" className="form-label">Package Adopt</label>
                        <select
                            onChange={setData}
                            value={inputValue.packageAdopt}
                            className="form-control"
                            name="packageAdopt"
                            id="packageAdopt"
                        >
                            <option value={"1 Months"}>1 Month</option>
                            <option value={"2 Months"}>2 Month</option>
                            <option value={"3 Months"}>3 Month</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="programType" className="form-label">Program Type</label>
                        <select
                            onChange={setData}
                            value={inputValue.programType}
                            className="form-control"
                            name="programType"
                            id="programType"
                        >
                            <option value={"Full body"}>Full body</option>
                            <option value={"Cardio"}>Cardio</option>
                            <option value={"Extra Exercise"}>Extra Exercise</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label><input type="checkbox" checked={inputValue.tAndC} onChange={changeTAndC} name="tAndC" id="tAndC" /> Agree to Terms & Conditions</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image</label>
                        <input onChange={setData} value={inputValue.image} type="text" className="form-control" name="image" id="image" />
                    </div>

                    {error &&
                        <div className="mb-3 bg-danger">
                            <p className='text-white text-center'>{error}</p>
                        </div>
                    }

                    <button onClick={register} type="submit" disabled={!inputValue.tAndC} className="btn btn-success">Submit</button>
                </form>

            </div>
        </>
    )
}

export default AddCustomerPage
