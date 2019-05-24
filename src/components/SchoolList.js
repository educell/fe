import React from 'react';
import styled from 'styled-components';
import { schoolList, deleteSchool, addSchool } from '../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddSchool from './AddSchool';

const List = styled.div`
    display: flex;
    overflow: scroll;
`

const School = styled.h1`
    scroll-direction: horizontal;
    overflow: scroll;
    font-size: 16px;
    margin: auto 5px;
`

const Button = styled.button`
    width: 30px;
    font-size: 14px;
    margin: 5px 5px;
`

class SchoolList extends React.Component {
    constructor(){
        super();
        this.state = {
            school: {
                name: '',
            },
            okToRender: false,
        }
        
    }

    componentDidMount(){
        console.log(this.props.token)
        this.props.schoolList(this.props.token);
    }

    changeHandler = e => {
        this.setState({
            school: {
                name: e.target.value,
            }
        })
    }
    
   componentDidUpdate(prevProps){
        if(this.props.fetchSchool !== prevProps.fetchSchool){
            if(!this.props.fetchSchool){
                this.setState({
                    okToRender: true
                })
            }
        }
   }

    deleteSchool = id =>{
        this.props.deleteSchool(id)
    }

    addSchool = e => {
        e.preventDefault();
        this.props.addSchool(this.state.school)
        .then(() => this.props.history.push('/dashboard'));
        console.log(this.state.school)
    }

    render(){
        if(!this.state.okToRender) return <div>loading...</div>;
        return(
            <div>
                <List>
                    {this.props.schools.map(school => {
                        return (
                            <div key={school.id}>
                                <School>{school.name}</School>
                                <Button onClick={() => this.deleteSchool(school.id)}>-</Button>
                            </div>
                    )})}
                </List>
                <AddSchool changeHandler={this.changeHandler} school={this.state.school} addSchool={this.addSchool} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    schools: state.schools,
    fetchSchool: state.fetchSchool,
    token: state.token,
})

export default withRouter(connect(mapStateToProps, { schoolList, deleteSchool, addSchool })(SchoolList));