import React from 'react';
import styled from 'styled-components';


const FormDiv = styled.div`
    border: 1px solid red;
    width: 20%;
    border-radius: 10px;
    position: relative;
    left: 700px;
    top: 300px;
    padding: 30px;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
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

    render(){
        return(
            <FormDiv>
                <Form onSubmit={null}>
                    <input onChange={this.handleChanges} name="username" type="text" placeholder="Enter Username" value={this.state.credentials.username} />
                    <input onChange={this.handleChanges} name="password" type="password" placeholder="Enter Password" value={this.state.credentials.password} />
                    <button>Log In</button>
                </Form>
            </FormDiv>
        )
    }
}

export default Login;