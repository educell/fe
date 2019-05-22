import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Add School</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>New School</ModalHeader>
          <ModalBody>
            <form onSubmit={this.props.addSchool}>
              <input onChange={this.props.changeHandler} name="school" placeholder="Enter School Name" value={this.props.school}/>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.addSchool}>Submit</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddSchool;