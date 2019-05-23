import React from 'react';
import styled from 'styled-components';

import StudentSearch from '../components/StudentSearch';
import SchoolList from '../components/SchoolList';
import Todo from '../components/Todo';

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

const DashHome = () => {
    return(
        <Right>
            <RightTop>
                <Student>
                    <h1>DASHBOARD</h1>
                    <StudentSearch />
                </Student>
                <ToDo>
                    <Todo />
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
    )
}

export default DashHome;