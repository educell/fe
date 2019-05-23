import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

const Form =styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
`

class AddSchool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  submitToggle = e => {
    e.preventDefault();
    this.props.addSchool();
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add School</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New School</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submitToggle}>
              <input onChange={this.props.changeHandler} name="school" placeholder="Enter School Name" value={this.props.school.name}/>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.submitToggle}>Submit</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddSchool;