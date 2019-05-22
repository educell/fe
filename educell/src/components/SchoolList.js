import React from 'react';
import { schoolList } from '../store/actions';
import { connect } from 'react-redux';

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
            <div>
                {this.props.schools.map(school => {
                    return <h1 key={school.id}>{school.name}</h1>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    schools: state.schools,
})

export default connect(mapStateToProps, { schoolList })(SchoolList);