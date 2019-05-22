import React from 'react';
import { addItem } from '../store/actions';
import { connect } from 'react-redux';

class Todo extends React.Component {
    constructor(){
        super();
        this.state = {
            item: '',
        }
    }

    changeHandler = e => {
        this.setState({
            item: e.target.value,
        })
    }

    addItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item)
        this.setState({
            item: '',
        })
    }

    render(){
        return (
            <div>
                <h1>Todo List</h1>
                <div>
                    <form onSubmit={this.addItem}>
                        <input onChange={this.changeHandler} placeholder="Enter Item Here!" value={this.state.item} />
                        <button>Enter</button>
                    </form>
                </div>
                <div>
                    {this.props.todo.map(item => {
                        return (
                            <div key={item.id}>
                                <h3>{item.task}</h3>
                            </div>
                    )})}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todo: state.todo
})

export default connect(mapStateToProps, { addItem })(Todo);