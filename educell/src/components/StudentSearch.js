import React from 'react';

class StudentSearch extends React.Component {
    constructor(){
        super();
        this.state = {
            search: '',
        }
    }

    render(){
        return(
            <div>
                <div>
                    <h3>SEARCH BY NAME</h3>
                    <input />
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