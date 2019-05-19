import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.div`
    display: flex;
    height: 20%;
`

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

const Empty = styled.div`
    width: 80%;
`

const NavItem = styled.li`
    margin: 0 20px;
`

const NavBar = () => {
    return (
        <Nav>
            <Empty></Empty>
            <NavList>
                <NavLink exact to='/'>Home</NavLink> 
                <NavLink to="/login">Log In</NavLink> {/* NavLinks be here and next line later */}
                <NavLink to='/createUser'>Create an Account</NavLink>
            </NavList>
        </Nav>    
    )
}

export default NavBar;