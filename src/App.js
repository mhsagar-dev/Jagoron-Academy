import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from './components/Admin/Dashboard';
import NavMenu from './components/Home/Header/NavMenu/NavMenu';
import Home from './components/Home/Home';
import Login from './components/LoginComponent/Login';
import { createContext } from 'react';
import PrivateRoute from './components/LoginComponent/PrivateRoute/PrivateRoute';
import UsersOrder from './components/UsersOrder/UsersOrder';
import MyOrder from './components/UsersOrder/MyOrder/MyOrder';
import AddService from './components/Admin/AddService/AddService';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddReview from './components/Admin/AddReview/AddReview';
import Footer from './components/Footer/Footer';

export const LoggedContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <LoggedContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <NavMenu></NavMenu>
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <PrivateRoute path='/services/:id'>
            <UsersOrder></UsersOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addReview">
            <AddReview></AddReview>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addServices">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/order/:id">
            <MyOrder></MyOrder>
          </PrivateRoute>
        <Route path='/login'>
            <Login></Login>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </LoggedContext.Provider>
  );
}

export default App;
