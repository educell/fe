import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './view/NavBar';
import Login from './components/login pages/Login';
import Home from './view/Home';
import NewUser from './components/login pages/NewUser';
import DashBoard from './components/DashBoard';
import PrivateRoute from './components/login pages/PrivateRoute';

import './App.css';

const SideDiv = styled.div`
  height: 100vh;
  border: 1px solid red;
`


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/createUser' component={NewUser} />
      <PrivateRoute exact path='/dashboard' component={DashBoard} />
    </div>
  );
}

export default App;
