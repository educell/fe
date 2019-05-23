import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
const Welh1 = styled.h1`
    color: #8DAF96;
`

const Slogan = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
`
const LoginSide = styled.div`
    background-color: #FFFFFF;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const Sign = styled.h1`
    color: #707070;
    font-size: 41px;
    position: relative;
    top: 250px;
`

const Small = styled.h3`
    border-radius: 20px 20px 0 0;
    color: white;
    background-color: #31363E;
    position: relative;
    top: 378px;
    left: 620px;
    width: 15%;
`

const A = styled.a`
    color: white;
`

const signColor = {
    color: '#707070',
}

const Home = () => {
    return (
        <HomeWrap>
            <Slogan>
                <Img src={logo} alt="Educell" />
                <Main />
                <Small><A href="#">ABOUT</A></Small>
            </Slogan>
            <LoginSide>
                <Welh1>Welcome Back!</Welh1>
                <Login />
                <Sign><Link style={signColor} to="/newUser">Sign Up</Link></Sign>
            </LoginSide>       
        </HomeWrap>
    )
}

export default Home;