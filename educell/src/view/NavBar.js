import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import small_logo from '../img/small_logo.svg';

const Nav = styled.div`
    display: flex;
    font-size: 18px; 
`

const List = styled.ul`
    display: flex;
`

const Item = styled.li`
    list-style-type: none;
    margin: 10px;
`

const Sign = styled.div`
    margin: 20px;
`

class NavBar extends React.Component {
    constructor(){
        super();
        this.state = {

        }
        
    }

    signOff = e => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/');
    }

    render(){
        return (
            <Nav>
                <div>
                    <img src={small_logo} alt="logo" />
                </div>
                <Sign>
                    <h4 onClick={this.signOff}>Sign Out</h4>
                </Sign>
                <List>
                    <Item>
                        <NavLink to="/dashboard">Home</NavLink>
                    </Item>
                    <Item>
                        <NavLink to="/students">Student</NavLink>
                    </Item>
                    <Item>
                        <NavLink to="">Notes</NavLink>
                    </Item>
                </List>
            </Nav>   
        )
    }
}

export default NavBar;