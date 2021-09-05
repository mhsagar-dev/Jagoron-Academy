import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import NavMenu from './components/Home/Header/NavMenu/NavMenu';
import Home from './components/Home/Home';
import Login from './components/LoginComponent/Login';
import { createContext } from 'react';
import PrivateRoute from './components/LoginComponent/PrivateRoute/PrivateRoute';

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
        <PrivateRoute path='/admin'>
            <Admin></Admin>
        </PrivateRoute>
        <Route path='/login'>
            <Login></Login>
        </Route>
      </Switch>
    </Router>
    </LoggedContext.Provider>
  );
}

export default App;
