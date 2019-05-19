import React from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';

const HomeDiv = styled.div`
    display: flex;
`

const Title = styled.div`

`

const Home = () => {
    return (
        <HomeDiv>
            <div>
                <SideBar />
            </div>
            <Title>
                <h1>I am Home</h1>
            </Title>   
            <div>
                
            </div>
        </HomeDiv>
    )
}

export default Home;