import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import SideBar from './view/SideBar';
import NavBar from './view/NavBar';
import Login from './components/Login';
import Home from './view/Home';

import './App.css';

const SideDiv = styled.div`
  height: 100vh;
`


function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <div>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
