import React from 'react';
import styled from 'styled-components';
import { withRouter, Route, Switch } from 'react-router-dom';

import NavBar from '../view/NavBar';
import DashHome from '../view/DashHome';
import Students from './Students';

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

const DashBoard = () => {
    return (
        <div>
            <div>
                <Switch>
                    <Route path='/dashboard' component={DashHome} />
                    <Route path='/students' component={Students} />
                </Switch>
            </div>
        </div>
    )
}

export default withRouter(DashBoard);