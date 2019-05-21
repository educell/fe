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
    constructor(){
        super();
        this.state = {
            userInfo: {  
                first: '',
                last: '',
                email: '',
                phone: '',
                invite: '',
                school: '',
                username: '',
                password: '',
                confirm: '',
            }
        }
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
        this.props.signUp(this.state.userInfo);
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
                                    <h3>First Name</h3>
                                    <Input onChange={this.changeHandler} name="first" placeholder="First Name" value={this.state.userInfo.first} />
                                </div>
                                <div>
                                    <h3>Last Name</h3>
                                    <Input onChange={this.changeHandler} name="last" placeholder="Last Name" value={this.state.userInfo.last} />
                                </div>
                            </InputDiv>
                            <InputDiv>
                                <div>
                                    <h3>Email</h3>
                                    <Input onChange={this.changeHandler} name="email" placeholder="email@email.com" value={this.state.userInfo.email} />
                                </div>
                                <div>
                                    <h3>Phone Number</h3>
                                    <Input onChange={this.changeHandler} name="phone" type="tel" placeholder="(000) 000-0000" value={this.state.userInfo.phone} />
                                </div>
                            </InputDiv>
                            <InputDiv>
                                <div>
                                    <h3>Invite Code</h3>
                                    <Input onChange={this.changeHandler} name="invite" placeholder="AC7-8H4U" value={this.state.userInfo.invite} />
                                </div>
                                <div>
                                    <h3>School</h3>
                                    <Input onChange={this.changeHandler} name="school" placeholder="School" value={this.state.userInfo.school} />
                                </div>
                            </InputDiv>
                            <InputDiv>
                                <div>
                                    <h3>Username</h3>
                                    <Input onChange={this.changeHandler} name="username" placeholder="Username" value={this.state.userInfo.username} />
                                </div>
                            </InputDiv>
                            <InputDiv>
                                <div>
                                    <h3>Password</h3>
                                    <Input onChange={this.changeHandler} name="password" type="password" placeholder="********" value={this.state.userInfo.password}  />
                                </div>
                                <div>
                                    <h3>Confirm Password</h3>
                                    <Input onChange={this.changeHandler} name="confirm" type="password" placeholder="*******" value={this.state.userInfo.confirm} />
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