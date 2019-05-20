import React from 'react';
import styled from 'styled-components';

import Login from '../components/login pages/Login';
import Main from './Main';
import logo from '../img/logo.svg';

const HomeWrap = styled.div`
    display: flex;
    height: 100vh;
    background: rgb(231,240,244);
    background: radial-gradient(circle, rgba(231,240,244,1) 0%, rgba(184,217,229,1) 100%);
`

const Img = styled.img`
    align-self: flex-start;
    margin: 10px 0;
    position: relative;
    top: 130px;
    left: 90px;
`

const Slogan = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
`
const LoginSide = styled.div`
    background-color: #FFFFFF;
    width: 25%;
`

const Home = () => {
    return (
        <HomeWrap>
            <Slogan>
                <Img src={logo} alt="Educell" />
                <Main />
            </Slogan>
            <LoginSide>
                <h1>Welcome Back!</h1>
                <Login />
            </LoginSide>       
        </HomeWrap>
    )
}

export default Home;