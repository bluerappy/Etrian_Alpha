import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import MonsterAddForm from './monstersAddForm';

class MonsterAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  addMonster = (monster) => {
    this.props.addMonster(monster);
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>ADD NEW MONSTER</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add New Monster</ModalHeader>
          <ModalBody>
            <MonsterAddForm parentToggle={this.toggle} addMonster={this.addMonster}/>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MonsterAdd;