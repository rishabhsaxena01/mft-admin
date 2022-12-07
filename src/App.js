import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
// import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios';
import AddCustomerPage from './Components/Customer/AddCustomerPage';
import EditCustomerPage from './Components/Customer/EditCustomerPage';
import ViewCustomerPage from './Components/Customer/ViewCustomerPage';
import DeleteCustomerPage from './Components/Customer/DeleteCustomerPage';
import ViewFranchisePage from './Components/Franchise/ViewFranchisePage';
import DeleteFranchisePage from './Components/Franchise/DeleteFranchisePage';
import EditFranchisePage from './Components/Franchise/EditFranchisePage';
import ChangePassword from './Components/ChangePassword';

axios.defaults.withCredentials = true

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Home} /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/changePassword" component={ChangePassword} />

          <Route exact path="/addCustomer" component={AddCustomerPage} />
          <Route exact path="/updateCustomer/:id" component={EditCustomerPage} />
          <Route exact path="/customerDetails/:id" component={ViewCustomerPage} />
          <Route exact path="/deleteCustomer/:id" component={DeleteCustomerPage} />

          {/* <Route exact path="/addCustomer" component={AddCustomerPage} /> */}
          <Route exact path="/updateFranchise/:id" component={EditFranchisePage} />
          <Route exact path="/franchiseDetails/:id" component={ViewFranchisePage} />
          <Route exact path="/deleteFranchise/:id" component={DeleteFranchisePage} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
