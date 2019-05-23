import React from 'react';

class StudentSearch extends React.Component {
    constructor(){
        super();
        this.state = {
            search: {
                name: '',
            }
        }
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
                    {/* map through students here */}
                </div>
                <div>
                    {/* .length the amount of students here */}
                </div>
            </div>
        )
    }
}

export default StudentSearch;