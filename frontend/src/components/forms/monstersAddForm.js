import React, {Component} from 'react';
import { Button, FormGroup, Label, Input, FormText } from 'reactstrap';

class monstersAddForm extends Component {
  state = {
    level : null,
    name : null,
    type : null,
    healthPoints : null,
    power : null,
    image : null,
    items : null,
    experience: null,
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  addMonster = () => {
    this.props.addMonster(this.state)
  }
  
  render() {
    const { name, healthPoints, power, image } = this.state;
    const isValid = name && healthPoints && power;
    return (
      <div>
        <FormGroup>
          <Label>Monster Name</Label>
            <Input type="text" name="name" onChange={this.handleChange} placeholder="ex : Slime" valid={name ? true : false}/>
        </FormGroup>
        <FormGroup>
          <Label>Level</Label>
            <Input type="number" name="level" placeholder="default : 1" onChange={this.handleChange} />
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
          <Label>Items Drop</Label>
            <Input type="text" name="itemps" placeholder="default : lifePotion" onChange={this.handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>XP Drop</Label>
            <Input type="number" name="experience" placeholder="default : 1" onChange={this.handleChange} />
        </FormGroup>
        {/* <FormGroup>
        <Label>Art Image</Label>
            <Input type="text" name="image" placeholder="URL" onChange={this.handleChange} valid={image ? true : false} />
        </FormGroup> */}
        <FormGroup>
          <Label>Image</Label>
            <Input type="select" name="image" onChange={this.handleChange} multiple valid={image ? true : false}>
              <option value="http://image.noelshack.com/fichiers/2018/45/3/1541587423-slime.png" >Basic Slime</option>
              <option value="http://image.noelshack.com/fichiers/2018/45/3/1541597428-cristalslime.png" >Cristal Slime</option>
              <option value="http://image.noelshack.com/fichiers/2018/45/3/1541598143-saberslime.png" >Saber Slime</option>
              <option value="http://image.noelshack.com/fichiers/2018/45/3/1541598143-boomslime.png" >Boom Slime</option>
              <option value="http://image.noelshack.com/fichiers/2018/45/3/1541598143-feralslime.png" >Feral Slime</option>
            </Input>
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
          <Button color="secondary" onClick={this.props.parentToggle}>Cancel</Button>
      </div>
      )}
    }

export default monstersAddForm;