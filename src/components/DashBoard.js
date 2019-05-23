import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import DashHome from '../view/DashHome';
import Students from './Students';

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