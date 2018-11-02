import React, {Component} from 'react';
import { Button, FormGroup, Label, Input, FormText} from 'reactstrap';

class monstersAddForm extends Component {
  state = {
    name : "",
    type : "",
    healthPoints : "",
    power : ""
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  addMonster = () => {
    this.props.addMonster(this.state)
  }
  
  render() {
    const { name, healthPoints, power } = this.state;
    const isValid = name && healthPoints && power;
    return (
      <div>
        <FormGroup>
          <Label>Monster Name</Label>
            <Input type="text" name="name" onChange={this.handleChange} placeholder="ex : Slime" valid={name ? true : false}/>
        </FormGroup>
        <FormGroup>
          <Label>Element Type</Label>
            <Input type="text" name="type" placeholder="ex : Fire (Optional)" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>HP amount</Label>
            <Input type="number" name="healthPoints" placeholder="ex : 2" onChange={this.handleChange} valid={healthPoints ? true : false} />
        </FormGroup>
        <FormGroup>
          <Label>Power</Label>
            <Input type="number" name="power" placeholder="ex : 2" onChange={this.handleChange} valid={power ? true : false} />
        </FormGroup>
        <FormGroup>
          {!isValid ? <FormText color="danger">
                       Please fill all required fields
                      </FormText> :
                      <FormText color="muted">
                        Please click on Validate to finish
                      </FormText>
                    }
        </FormGroup>
          <Button color={!isValid ? "danger" : "primary"} disabled={!isValid} onClick={this.addMonster}>Validate</Button>{' '}
      </div>
      )}
    }

export default monstersAddForm;