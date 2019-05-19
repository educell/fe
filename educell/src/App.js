import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './view/NavBar';
import Login from './components/Login';
import Home from './view/Home';
import NewUser from './components/NewUser';

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
    </div>
  );
}

export default App;
