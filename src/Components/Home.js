import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {
  getAllCustomer,
  getAllFranchise,
  getAllContact,
  getAllSubscription,
  deleteSubscription,
  deleteContact
} from "../Services";
import Navbar from "./Navbar";

const Home = () => {
  const [allCustomers, setAllCustomers] = useState([]);
  const [allFranchise, setAllFranchise] = useState([]);
  const [allSubscriptions, setAllSubscriptions] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [reload, setReload] =useState(false);

  const history = useHistory();
  const gettingData = () => {
    getAllCustomer()
      .then((res) => {
        setAllCustomers(res.data);
      })
      .catch((err) => {
        if (err.response.status >= 400 && err.response.status < 500) {
          console.log(err.response.data.message);
          history.push("/login");
        }
      });
    getAllFranchise()
      .then((res) => {
        setAllFranchise(res.data);
      })
      .catch((err) => {
        if (err.response.status >= 400 && err.response.status < 500) {
          console.log(err.response.data.message);
          history.push("/login");
        }
      });
    getAllContact()
      .then((res) => {
        setAllContacts(res.data);
      })
      .catch((err) => {
        if (err.response.status >= 400 && err.response.status < 500) {
          console.log(err.response.data.message);
          history.push("/login");
        }
      });
    getAllSubscription()
      .then((res) => {
        setAllSubscriptions(res.data);
      })
      .catch((err) => {
        if (err.response.status >= 400 && err.response.status < 500) {
          console.log(err.response.data.message);
          history.push("/login");
        }
      });
  };

  useEffect(() => {
    gettingData();
  }, [reload]);

  return (
    <>
      <Navbar />
      <div className="mt-5">
        {allCustomers.length !== 0 && (
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <caption>Registrations</caption>
              <NavLink to="/addCustomer" className="btn btn-primary my-2">
                Add Customer
              </NavLink>
            </div>
            <table className="table ">
              <thead className="bg-dark">
                <tr>
                  <th scope="col" className="opt text-white">
                    S.No
                  </th>
                  <th scope="col" className="opt text-white">
                    First Name
                  </th>
                  <th scope="col" className="opt text-white">
                    Last Name
                  </th>
                  <th scope="col" className="opt text-white">
                    Email
                  </th>
                  <th scope="col" className="opt text-white">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {allCustomers.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th className="opt" scope="row">
                        {index + 1}
                      </th>
                      <td className="opt">{value.firstName}</td>
                      <td className="opt">{value.lastName}</td>
                      <td className="opt">{value.email}</td>
                      <td className="d-flex justify-content-between">
                        <NavLink
                          to={`/customerDetails/${value._id}`}
                          className="btn btn-success"
                        >
                          View
                        </NavLink>
                        <NavLink
                          to={`/updateCustomer/${value._id}`}
                          className="btn btn-warning"
                        >
                          Update
                        </NavLink>
                        <NavLink
                          to={`/deleteCustomer/${value._id}`}
                          className="btn btn-danger"
                        >
                          Delete
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <hr />
        {allFranchise.length !== 0 && (
          <div className="container py-4">
            <div className="my-2">
              <caption>Franchises</caption>
            </div>
            <table className="table ">
              <thead className="bg-dark">
                <tr>
                  <th scope="col" className="opt text-white">
                    S.No
                  </th>
                  <th scope="col" className="opt text-white">
                    Name
                  </th>
                  <th scope="col" className="opt text-white">
                    Phone
                  </th>
                  <th scope="col" className="opt text-white">
                    Email
                  </th>
                  <th scope="col" className="opt text-white">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {allFranchise.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th className="opt" scope="row">
                        {index + 1}
                      </th>
                      <td className="opt">{value.name}</td>
                      <td className="opt">{value.phone}</td>
                      <td className="opt">{value.email}</td>
                      <td className="d-flex justify-content-between">
                        <NavLink
                          to={`/franchiseDetails/${value._id}`}
                          className="btn btn-success"
                        >
                          View
                        </NavLink>
                        <NavLink
                          to={`/updateFranchise/${value._id}`}
                          className="btn btn-warning"
                        >
                          Update
                        </NavLink>
                        <NavLink
                          to={`/deleteFranchise/${value._id}`}
                          className="btn btn-danger"
                        >
                          Delete
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <hr />
        {allContacts.length !== 0 && (
          <div className="container py-4">
            <div className="my-2">
              <caption>Contacts</caption>
            </div>
            <table className="table ">
              <thead className="bg-dark">
                <tr>
                  <th scope="col" className="opt text-white">
                    S.No
                  </th>
                  <th scope="col" className="opt text-white">
                    Name
                  </th>
                  <th scope="col" className="opt text-white">
                    Email
                  </th>
                  <th scope="col" className="opt text-white">
                    Phone
                  </th>
                  <th scope="col" className="opt text-white">
                    Subject
                  </th>
                  <th scope="col" className="opt text-white">
                    Location
                  </th>
                  <th scope="col" className="opt text-white">
                    Query
                  </th>
                  <th scope="col" className="opt text-white">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {allContacts.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th className="opt" scope="row">
                        {index + 1}
                      </th>
                      <td className="opt">{value.name}</td>
                      <td className="opt">{value.email}</td>
                      <td className="opt">{value.number}</td>
                      <td className="opt">{value.subject}</td>
                      <td className="opt">{value.location}</td>
                      <td className="opt">{value.query}</td>
                      <td className="d-flex justify-content-between">
                      <button
                          className="btn btn-primary"
                        >
                          <a href={`mailto:${value.email}?subject=Regarding ${value.subject}&body=Dear ${value.name}`} style={{textDecoration:"none", color:"white"}}>Reply</a>
                        </button>
                        <button
                          onClick={() => {
                            deleteContact(value._id);
                            setReload(!reload)
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <hr />
        {allSubscriptions.length !== 0 && (
          <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center">
              <caption>Subscriptions</caption>
              <NavLink to="/#" className="btn btn-primary my-2">
                Send Mail
              </NavLink>
            </div>
            <table className="table ">
              <thead className="bg-dark">
                <tr>
                  <th scope="col" className="opt text-white">
                    S.No
                  </th>
                  <th scope="col" className="opt text-white">
                    Email
                  </th>
                  <th scope="col" className="opt text-white">
                    Operations
                  </th>
                </tr>
              </thead>
              <tbody>
                {allSubscriptions.map((value, index) => {
                  return (
                    <tr key={index}>
                      <th className="opt" scope="row">
                        {index + 1}
                      </th>
                      <td className="opt">{value.email}</td>
                      <td className="d-flex justify-content-center">
                        {/* <NavLink to={`/deleteSubscription/${value._id}`} className="btn btn-danger">Delete</NavLink> */}
                        <button
                          onClick={() => {
                            deleteSubscription(value._id);
                            setReload(!reload)
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
