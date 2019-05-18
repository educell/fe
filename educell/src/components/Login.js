import React from 'react';

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
        this.setState({
            credentials: {
                [e.target.name]: e.target.value,
            }
        })
    }

    render(){
        return(
            <div>
                <form>
                    <input onChange={this.handleChanges} name="username" type="text" placeholder="Enter Username" value={this.state.credentials.username} />
                    <input onChange={this.handleChanges} name="password" type="password" placeholder="Enter Password" value={this.state.credentials.password} />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;