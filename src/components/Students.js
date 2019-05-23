import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Student = styled.div`
    border: 1px solid gray;
`

class Students extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1><strong>Students</strong></h1>
                {/*<div>
                    <div>
                        <h2>Add Student</h2>
                    </div>
                    <form>
                        <input  />
                        <input  />
                        <input  />
                        <input  />
                        <input  />
                        <input  />
                        <input  />
                    </form>
                </div>*/}
                <div>
                    {this.props.students.map(student => {
                        return(
                            <Student key={student.id}>
                                <h1>{student.name}</h1>
                                <hr/>
                                <h2>Age: {student.age}</h2>
                                <h2>Grade: {student.grade}</h2>
                                <h2>Representative: {student.representative}</h2>
                                <h2>Emergency Contact: {student.contactInfo}</h2>
                            </Student>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    students: state.students,
})

export default connect(mapStateToProps, {})(Students);