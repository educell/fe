import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import StudentSearch from './StudentSearch';
import small_logo from '../img/small_logo.svg';

const Whole = styled.div`
    display: flex;
    height: 100vh;
`

const Left = styled.div`
    background-color: #B8D9E5;
    width: 10%;
`

const Right = styled.div`
    width: 90%;
`

class DashBoard extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return (
            <Whole>
                <Left>
                    <div>
                        <img src={small_logo} alt="logo" />
                    </div>
                    <div>
                        <h1>User</h1>
                        <h4>Sign Out</h4>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <NavLink to="/dashboard">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="">Student</NavLink>
                            </li>
                            <li>
                                <NavLink to="">Notes</NavLink>
                            </li>
                        </ul>
                    </div>
                </Left>
                <Right>
                    <div>
                        <h1>DASHBOARD</h1>
                        <StudentSearch />
                    </div>
                </Right>
            </Whole>
        )
    }
}

export default DashBoard;