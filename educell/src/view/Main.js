import React from 'react';
import styled from 'styled-components';

const Writing1 = styled.h1`
    background-color: black;
    color: white;
    font-size: 96px;
    padding: 10px;
    font-family: Roboto Black;
    margin: 0 400px 10px 0;
    font-weight: 900;
`

const Writing2 = styled.h1`
    background-color: black;
    color: white;
    font-size: 96px;
    padding: 10px;
    font-family: Roboto Black;
    margin: 0 200px 10px 0;
    font-weight: 900;
`

const Writing3 = styled.h1`
    background-color: black;
    color: white;
    font-size: 96px;
    padding: 10px;
    font-family: Roboto Black;
    margin: 0 700px 10px 0;
    font-weight: 900;
`

const WritingDiv = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    margin: 30px 100px 0 90px;
    position: relative;
    top: 200px;
`

const Main = () => {
    return (
        <div>
            <WritingDiv>
                <Writing1>Bridging the gap</Writing1>
                <Writing2>Between social workers</Writing2>
                <Writing3>And schools</Writing3>
            </WritingDiv>
        </div>
    )
}

export default Main;