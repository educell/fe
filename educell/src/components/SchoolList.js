import React from 'react';
import styled from 'styled-components';
import { schoolList, deleteSchool } from '../store/actions';
import { connect } from 'react-redux';

const List = styled.div`
    display: flex;
    overflow: scroll;
`

const School = styled.h1`
    scroll-direction: horizontal;
    overflow: scroll;
    font-size: 24px;
    margin: auto 5px;
`

const Button = styled.button`
    width: 30px;
    font-size: 20px;
    margin: 5px 5px;
`

class SchoolList extends React.Component {
    constructor(){
        super();
        this.state = {
            
        }
        
    }

    componentDidMount(){
        this.props.schoolList();
    }

    deleteSchool = id =>{
        this.props.deleteSchool(id)
    }

    render(){
        return(
            <div>
                <List>
                    {this.props.schools.map(school => {
                        return (
                            <div key={school.id}>
                                <School>{school.name}</School>
                                <Button>+</Button>
                                <Button onClick={() => this.deleteSchool(school.id)}>-</Button>
                            </div>
                    )})}
                    
                </List>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    schools: state.schools,
})

export default connect(mapStateToProps, { schoolList, deleteSchool })(SchoolList);