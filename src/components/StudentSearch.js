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
        this.props.studentList(this.props.token);
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
                    {this.props.students.map(student => {
                        return(
                            <div key={student.id}>
                                <h2>{student.name}</h2>
                                <h4>age: {student.age}</h4>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <h4><strong>Students: {this.props.students.length}</strong></h4>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    students: state.students,
    token: state.token,
})

export default connect(mapStateToProps, { studentList })(StudentSearch);