import React, { Component } from 'react';
// maybe needs a change
import { fetchOneDog, updateDoggy } from '../services/api';
import UpdateDog from './UpdateDog';


class PupProfile extends Component {
  constructor(props) {
    super(props);
    const { dogs, dog } = props;
    this.state = {
      owner: dog.owner,
      name: dog.name,
      breed: dog.breed,
      size: dog.size,
      age: dog.age,
      picture: dog.picture,
    }
  }

  // handle change
  handleChange(e) {

  }
  // handle submit

  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <p>Owner: {this.state.owner}</p>
        <p>Breed: {this.state.breed}</p>
        <p>Size: {this.state.size}</p>
        <p>Age: {this.state.age}</p>
      </div>
    )
    // render pup profile
    // render forms (update)
    // render forms (gradebook)
  }

}

export default PupProfile;
