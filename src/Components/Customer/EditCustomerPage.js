import React, { useState, useEffect } from 'react';
import { useHistory, useParams, } from "react-router-dom";
import { getCustomerById, editCustomer } from '../../Services';
import Navbar from '../Navbar';
import { generatePublicUrl } from '../../urlConfig';

const EditCustomerPage = () => {

    const [preValue, setPrevFunc] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        dob: "",
        address: "",
        gender: "",
        personalTraining: false,
        packageAdopt: "",
        programType: "",
        tAndC: false,
        image: ""
    })
    const [error, setError] = useState("");
    const history = useHistory();

    const { id } = useParams('');

    const getPrevDetails = () => {
        getCustomerById(id)
            .then((res) => {
                console.log(res.data)
                setPrevFunc({
                    ...res.data,
                    // dob: new Date(res.data.dob).toLocaleDateString('en-GB')
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
        editCustomer(id, preValue)
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

    function formatDate(date) {
        console.log("date is ",date)
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
        
    }

    return (
        <>
            <Navbar />
            <div className='container mt-4'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input onChange={setData} value={preValue.firstName} type="text" className="form-control" name="firstName" id="firstName" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input onChange={setData} value={preValue.lastName} type="text" className="form-control" name="lastName" id="lastName" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input disabled onChange={setData} value={preValue.email} type="email" className="form-control" name="email" id="email" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">Contact</label>
                        <input onChange={setData} value={preValue.contact} type="text" className="form-control" name="contact" id="contact" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input onChange={setData} value={formatDate(preValue.dob)} type="date" className="form-control" name="dob" id="dob" />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input onChange={setData} value={preValue.address} type="text" className="form-control" name="address" id="address" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <br />
                        <div className="d-flex justify-content-between">
                            <label><input type="radio" value="Male" checked={preValue.gender === "Male"} onChange={setData} name="gender" /> Male</label>
                            <label><input type="radio" value="Female" checked={preValue.gender === "Female"} onChange={setData} name="gender" /> Female</label>
                            <label><input type="radio" value="Other" checked={preValue.gender === "Other"} onChange={setData} name="gender" /> Other</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="personalTraining" className="form-label">Wan't Personal Training ? </label>
                        <select
                            onChange={setData}
                            value={preValue.personalTraining}
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
                            value={preValue.packageAdopt}
                            className="form-control"
                            name="packageAdopt"
                            id="packageAdopt"
                        >
                            <option value={"Basic"}>Basic</option>
                            <option value={"Beginner"}>Beginner</option>
                            <option value={"Premium"}>Premium</option>
                            <option value={"Ultimate"}>Ultimate</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="programType" className="form-label">Program Type</label>
                        <select
                            onChange={setData}
                            value={preValue.programType}
                            className="form-control"
                            name="programType"
                            id="programType"
                        >
                            <option value={"Strength Training"}>Strength Training</option>
                            <option value={"Powerlifting"}>Powerlifting</option>
                            <option value={"HIIT/Cardio"}>HIIT/Cardio</option>
                            <option value={"Quick Result"}>Quick Result</option>
                            <option value={"Tabata"}>Tabata</option>
                            <option value={"Yoga"}>Yoga</option>
                            <option value={"Zumba"}>Zumba</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label><input disabled type="checkbox" checked={preValue.tAndC} name="tAndC" id="tAndC" /> Agree to Terms & Conditions</label>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image: </label>
                        <img width="15%" src={generatePublicUrl(preValue.image)} alt="image" />
                        {/* <input onChange={setData} value={preValue.image} type="text" className="form-control" name="image" id="image" /> */}
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

export default EditCustomerPage
