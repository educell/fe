import React from 'react';
import { connect } from 'react-redux';
import { studentList } from '../store/actions';

class StudentSearch extends React.Component {
    constructor(){
        super();
        this.state = {
            search: {
                name: '',
            }
        }
    }
    
    componentDidMount(){
        this.props.studentList();
    }

    changeHandler = e => {
        this.setState({
            search: {
                name: e.target.value,
            }
        })
    }

    render(){
        return(
            <div>
                <div>
                    <h3>SEARCH BY NAME</h3>
                    <input placeholder="Last Name" onChange={this.changeHandler} value={this.state.search.name}/>
                    <button>Enter</button>
                </div>
                <div>
                    
                </div>
                <div>
                    {/* .length the amount of students here */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    students: state.students,
})

export default connect(mapStateToProps, { studentList })(StudentSearch);