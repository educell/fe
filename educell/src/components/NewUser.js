import React from 'react';

class NewUser extends React.Component {
    constructor(){
        super();
        this.state = {
            userInfo: {
                name: '',
                email: '',
                age: '',
                username: '',
                password: '',
                type: '',  
                

            }
        }
    }

    render(){
        return(
            <div>
                <h1>New User Form</h1>
            </div>
        )
    }
}

export default NewUser;