import React from 'react';
import { signUp } from '../../store/actions';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import logo from '../../img/logo.svg';
import { connect } from 'react-redux';

const MainWrap = styled.div`
    display: flex;
    height: 100vh;
`

const HeadWrap = styled.div`
    width: 95vw;
    display: flex;
    justify-content: space-between;
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
    background-color: #31363E;
    border-radius: 0 0 20px 20px;
    margin: 0 10px;
    padding: 10px;
`

const Items = styled.li`
    margin: 5px; 
`

const Blue = styled.div`
    background-color: #B8D9E5;
    width: 5%;
`

const Input = styled.input`
    border: 2px solid #40454E;
`

const Button = styled.button`
    border-radius: 75px;
    color: white;
    background-color: #D67E8D;
    margin: 20px 0;
`
const InputDiv = styled.div`
    display: flex;
`

const navColor = {
    color: '#D9D9D9',
}

const signColor = {
    color: '#8DAF96',
}

class NewUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {  
                username: '',
                password: '',
            }
        }
        console.log(this.props)
    }

    changeHandler = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value,
            }
        })
    }

    newUser = e => {
        e.preventDefault();
        this.props.signUp(this.state.userInfo)
        .then(() => this.props.history.push('/'));
        localStorage.removeItem('token');
    }

    render(){
        return(
            <MainWrap>
                <Blue></Blue>
                <div>
                    <HeadWrap>
                        <img src={logo} alt="Logo" />
                        <div>
                            <List>
                                <Items>
                                    <NavLink style={navColor} to="">ABOUT</NavLink>
                                </Items>  
                                <Items>
                                    <NavLink style={navColor} to="">SIGN IN</NavLink>
                                </Items>
                                <Items>
                                    <NavLink style={signColor} to="">SIGN UP</NavLink>
                                </Items>      
                            </List>
                        </div>
                    </HeadWrap>
                    <div>
                        <form onSubmit={this.newUser}>
                            <InputDiv>
                                <div>
                                    <h3>Username</h3>
                                    <Input required onChange={this.changeHandler} name="username" placeholder="Username" value={this.state.userInfo.username} />
                                </div>
                            </InputDiv>
                            <InputDiv>
                                <div>
                                    <h3>Password</h3>
                                    <Input required onChange={this.changeHandler} name="password" type="password" placeholder="********" value={this.state.userInfo.password}  />
                                </div>
                                
                            </InputDiv>
                            <Button>Sign Up</Button>
                        </form>
                    </div>
                </div>
            </MainWrap>
        )
    }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { signUp })(NewUser);