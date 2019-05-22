import React from 'react';
import { Route } from 'react-router-dom';

import Login from './components/login pages/Login';
import Home from './view/Home';
import NewUser from './components/login pages/NewUser';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/login pages/PrivateRoute';

import './App.css';


function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/login'  component={Login} />
      <Route path='/newUser' component={NewUser} />
      <PrivateRoute exact path='/dashboard' component={DashBoard} />
    </div>
  );
}

export default App;
