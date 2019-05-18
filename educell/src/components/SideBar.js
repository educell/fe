import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    display: flex;
    flex-direction: row;
`

const StyleDiv = styled.div`
    border: 1px solid red;
    height: 100vh;
`

const Title = styled.div`
    writing-mode: vertical-lr;
    text-orientation: sideways-right;
`

class SideBar extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <>
                <Bar>
                    <StyleDiv>
                        <Title>
                            <h1>EDUCELL</h1>
                        </Title>
                    </StyleDiv>
                </Bar>
            </>
            
        )
    }
}

export default SideBar;