import React from 'react';
import styled from 'styled-components';


const FormDiv = styled.div`
    border: 1px solid red;
    width: 20%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-content: center;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 20px auto;
`

const Button = styled.button`
    width: 40%;
    border-radius: 75px;
    color: white;
    background-color: #D67E8D;
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
        console.log(e.target.name, e.target.value)
        this.setState({
            credentials: {
                [e.target.name]: e.target.value,
            }
        })
    }

    loginUser = e => {
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.loginUser}>
                    <h3>USERNAME</h3>
                    <input onChange={this.handleChanges} name="username" type="text" placeholder="Enter Username" value={this.state.credentials.username} />
                    <h3>Password</h3>
                    <input onChange={this.handleChanges} name="password" type="password" placeholder="Enter Password" value={this.state.credentials.password} />
                    <Button>Log In</Button>
                </Form>
            </div>
        )
    }
}

export default Login;