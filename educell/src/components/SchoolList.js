import React from 'react';
import styled from 'styled-components';
import { schoolList } from '../store/actions';
import { connect } from 'react-redux';

const List = styled.div`
    display: flex;
    overflow: scroll;
`

const School = styled.h1`
    scroll-direction: horizontal;
    font-size: 20px;
    margin: auto 5px;
`

class SchoolList extends React.Component {
    constructor(){
        super();
        this.state = {
            
        }
        
    }

    componentDidMount(){
        this.props.schoolList();
        console.log(this.props);
    }

    render(){
        return(
            <List>
                {this.props.schools.map(school => {
                    return <School key={school.id}>{school.name}</School>
                })}
            </List>
        )
    }
}

const mapStateToProps = state => ({
    schools: state.schools,
})

export default connect(mapStateToProps, { schoolList })(SchoolList);