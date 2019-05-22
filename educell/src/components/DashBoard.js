import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import StudentSearch from './StudentSearch';
import SchoolList from './SchoolList';
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
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const RightTop = styled.div`
    display: flex;
    margin: 20px;
    justify-content: space-evenly;
`

const RightBot = styled.div`
`

const Student = styled.div`
    border: 1px solid red;
    width: 30%;
    height: 80vh
`

const School = styled.div`
    align-self: flex-end;
`

const ToDo = styled.div`
    border: 1px solid red;
    width: 30%;
`

const Some = styled.div`
    border: 1px solid red;
    width: 30%;
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
                    <RightTop>
                        <Student>
                            <h1>DASHBOARD</h1>
                            <StudentSearch />
                        </Student>
                        <ToDo>
                            {/* todo list here if able to get to it */}
                        </ToDo>
                        <Some>
                            {/* something else would go here? */}
                        </Some>
                    </RightTop>
                    <RightBot>
                        <School>
                            <SchoolList />
                        </School>
                    </RightBot>
                </Right>
            </Whole>
        )
    }
}

export default DashBoard;