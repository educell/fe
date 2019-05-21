import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { login } from '../../store/actions';


const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 20px auto;
    text-align: left;
`

const Descp = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: #40454E;
`

const Button = styled.button`
    width: 40%;
    border-radius: 75px;
    color: white;
    background-color: #D67E8D;
    margin: 20px 0;
    align-self: flex-end;
    position: relative;
    left: 20px;
`

const Input = styled.input`
    border: 2px solid #40454E;
`

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            credentials: {
                username: '',
                password: '',
            }
        }
    }

    handleChanges = e => {
        console.log(e.target.name, e.target.value);
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            }
        })
    }

    loginUser = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
        .then(() => {
            this.props.history.push("/dashboard");
        });
    };

    render(){
        return(
            <div>
                <Form onSubmit={this.loginUser}>
                    <Descp>USERNAME</Descp>
                    <Input onChange={this.handleChanges} name="username" type="text" placeholder="Enter Username" value={this.state.credentials.username} />
                    <Descp>Password</Descp>
                    <Input onChange={this.handleChanges} name="password" type="password" placeholder="Enter Password" value={this.state.credentials.password} />
                    <Button>Log In</Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
})

export default connect(mapStateToProps, { login })(Login);