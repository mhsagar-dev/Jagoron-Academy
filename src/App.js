import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import NavMenu from './components/Home/Header/NavMenu/NavMenu';
import Home from './components/Home/Home';



function App() {
  return (
    <Router>
      <NavMenu></NavMenu>
      <Switch>
        <Route exact path='/'>
            <Home></Home>
        </Route>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route path='/admin'>
            <Admin></Admin>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
